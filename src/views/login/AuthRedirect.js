import React from "react"


/**
 * Pseudo-routing component, handles after-login routing
 * to profile information and falls back to login without token
 */
class AuthRedirect extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        console.log(localStorage)
        if (localStorage.token) {
            // inspect user type
            props.history.push('/external-registration')
        } else {
            // fall back to login
            props.history.push('/')
        }
    }
    render(){
        return null
    }
}

export default AuthRedirect