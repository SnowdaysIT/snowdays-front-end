import gql from 'graphql-tag'

// QUERIES
export const GET_ACTIVITIES = gql`
{
    activities {
        edges {
            node {
                id
                name
            }
        }
    }
}
`

export const GET_HELPER_TYPES = gql`
{
    helpers {
        edges {
            node {
                id
                type
            }
        }
    }
}
`

export const GET_RENTAL_MATERIALS = gql`
{
    materials {
        edges {
            node {
                id
                name
            }
        }
  }
}
`

export const GET_SIZES = gql`
{
    sizes {
        edges {
            node {
                id
                name
            }
        }
  }
}
`

export const GET_MERCH_ITEMS = gql`
{
    items {
        edges {
            node {
                id
                name
                description
            }
        }
  }
}
`

export const GET_STUDENT_DORM_ADDRESSES = gql`
{
    addresses(last: 3) {
        edges {
            node {
                id
            }
    }
  }
}
`



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
  mutation AuthNewUser($email: String!, $password: String!) {
    authenticate(input: {email: $email, password: $password}) {
      jwtToken
    }
  }
`

export const CREATE_PROFILE = gql`
  mutation CreateProfileMutation($firstName: String!, $lastName: String!, $mobilePhone: String!, $badgeNumber: String!, $gender: Gender!, $isVegetarian: Boolean!, $idNumber: String!, $universityId: UUID!) {
    createProfile(input: {profile: {firstName: $firstName, lastName: $lastName, mobilePhone: $mobilePhone, badgeNumber: $badgeNumber, gender: $gender, isVegetarian: $isVegetarian, idNumber: $idNumber, universityId: $universityId}}){
        profile {
            id
        }
    }
  }
`

export const MAKE_HELPER = gql`
  mutation MakeHelperMutation($helper: UUID!, $id: UUID!) {
    updateProfile(input: {patch: {helper: $helper}, id: $id}) {
        profile {
            id
        }
    }
  }
`

export const CREATE_NEW_ADDRESS = gql`
    mutation CreateAddressMutation($street: String!, $zipCode: String!, $city: String!, $country: String!) {
        createAddress(input: {address: {street: $street, zipCode: $zipCode, city: $city, country: $country}}) {
            address {
                id
            }
        }
    }
`
export const CREATE_ACCOMMODATION = gql`
    mutation CreateAccommodationMutation($address: UUID!, $isDormroom: Boolean!, $places: BigFloat!, $hostId: UUID!, $description: String) {
        createAccommodation(input: {accommodation: {address: $address, isDormroom: $isDormroom, places: $places, hostId: $hostId, description: $description}}) {
            accommodation {
                id
            }
        }
    }
`

export const MAKE_HOST = gql`
  mutation MakeHostMutation($accommodationId: UUID!, $id: UUID!) {
    updateProfile(input: {patch: {accommodationId: $accommodationId}, id: $id}) {
        profile {
            id
        }
    }
  }
`

export const ADD_ACTIVITY = gql`
    mutation AddActivityMutation($profileId: UUID!, $activityId: UUID!) {
        createProfileActivity(input: {profileActivity: {profileId: $profileId, activityId: $activityId}}) {
            profile {
                id
            }
        }
    }
`

export const CREATE_RENTAL = gql`
    mutation CreateRentalMutation($experience: ExperienceLevel!, $height: Int, $shoeSize: Int, $weight: Int) {
        createRental(input: {rental: {experience: $experience, height: $height, shoeSize: $shoeSize, weight: $weight}}) {
            rental {
                id
            }
        }
    }
`

export const ADD_MATERIALS_TO_RENTAL = gql`
    mutation AddMaterialsToRentalMutation($rentalId: UUID!, $materialId: UUID!) {
        createRentalMaterial(input: {rentalMaterial: {rentalId: $rentalId, materialId: $materialId}}) {
            rental {
                id
            }
        }
    }
`

export const ADD_RENTAL = gql`
  mutation AddRentalMutation($rentalId: UUID!, $id: UUID!) {
    updateProfile(input: {patch: {rentalId: $rentalId}, id: $id}) {
        profile {
            id
        }
    }
  }
`

export const CREATE_PURCHASE = gql`
    mutation CreatePurchaseMutation {
        createPurchase(input: {purchase: {status: SUBMITTED}}) {
            purchase {
                id
            }
        }
    }
`

export const ADD_ITEM_TO_PURCHASE = gql`
    mutation AddItemsToPurchaseMutation($purchaseId: UUID!, $itemId: UUID!, $availableNo: BigFloat!) {
        createPurchaseItem(input: {purchaseItem: {purchaseId: $purchaseId, itemId: $itemId, availableNo: $availableNo}}) {
            purchaseItem {
                purchaseId
            }
        }
    }
`

export const ADD_PURCHASE = gql`
  mutation AddPurchaseMutation($purchaseId: UUID!, $id: UUID!) {
    updateProfile(input: {patch: {purchaseId: $purchaseId}, id: $id}) {
        profile {
            id
        }
    }
  }
`
export const LINK_PROFILE_TO_ACCOUNT = gql`
  mutation LinkProfileMutation($profileId: UUID!, $id: UUID!) {
    updateAccount(input: {patch: {profileId: $profileId}, id: $id}) {
        account {
            id
        }
    }
  }
`