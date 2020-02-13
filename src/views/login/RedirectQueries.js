import gql from 'graphql-tag'

export const GET_ACCOUNT_ID = gql`
{
    currentAccountId
}
`

export const GET_ACCOUNT_PROFILE_INFO = gql`
query GetProfileInfo($id: UUID!) {
    account(id: $id) {
        roleName
        profile {
            firstName
        }
    }
}`