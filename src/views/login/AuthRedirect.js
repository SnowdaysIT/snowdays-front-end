import React from "react"
import { Query } from 'react-apollo';

import {GET_ACCOUNT_ID, GET_ACCOUNT_PROFILE_INFO} from "./RedirectQueries.js"

const GOOGLE_FORM_URL = 'https://forms.gle/zAmgL8R8GoTSTLJU8'

/**
 * Pseudo-routing component, handles after-login routing
 * to profile information and falls back to login without token
 */
class AuthRedirect extends React.Component {
    constructor(props){
        super(props)
        if (localStorage.token) {
            this.state = {
                registrationType: this.props.history.location.state.registrationType
            }
            // inspect user type
            //props.history.push('/external-registration')
        } else {
            // fall back to login
            props.history.push('/')
        }
    }

    route(profile) {
        switch(profile.role){
            case 'participant_user':
                if (profile.type === 'Internal') {
                    return (
                        <p>To complete your internal student registration, you will be proceding outside snowdays.it into Google Forms. <a href={GOOGLE_FORM_URL}>To confirm, click here</a></p>
                    )
                    // window.open(GOOGLE_FORM_URL)
                    // this.props.history.push('/')
                } else {
                    if (profile.name === 'dummyName')
                        this.props.history.push('/external-registration')
                    else
                        this.props.history.push('/')
                }
                break

            default:
                this.props.history.push('/')
                break
        }
        return null
    }

    render() {
        return (
            <Query query={GET_ACCOUNT_ID}>
                {({ loading, error, data }) => {
                    if (loading) return <div></div>
                    else if (error) return <div></div>
                    else return (
                        <Query query={GET_ACCOUNT_PROFILE_INFO} variables={{"id": data.currentAccountId}}>
                            {({ loading, error, data }) => {
                                if (loading) return <div></div>
                                else if (error) return <div></div>
                                else {
                                    return this.route({
                                        name: data.account.profile.firstName,
                                        role: data.account.roleName,
                                        type: (this.state.registrationType ? this.state.registrationType : 'Other')
                                    })
                                }
                            }}
                        </Query>
                    )
                }}
            </Query>
        )
    }
}

export default AuthRedirect