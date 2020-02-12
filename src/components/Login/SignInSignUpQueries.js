import gql from 'graphql-tag'



// MUTATIONS

// User sign-up
export const SIGNUP = gql`
  mutation SignUpMutation($email: String!, $password: String!) {
    signupAccount(input: {email: $email, password: $password}) {
        clientMutationId
    }
  }
`

// User authentication
export const USER_AUTH = gql`
  mutation AuthenticationMutation($email: String!, $password: String!) {
    authenticate(input: {email: $email, password: $password}) {
      jwtToken
    }
  }
`