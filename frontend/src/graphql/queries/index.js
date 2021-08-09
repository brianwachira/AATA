import { gql } from '@apollo/client';

export const ALL_CLINICS = gql`
query  {
  clinics {
    name
    location
    createdAt
    id
  }
}
`
export const ALL_ISSUES = gql`
query {
    issues {
    id
    title
    description
    isSolved
    createdAt
    filedBy {
      firstName
    }
    branch {
      name
      id
      location
    }
    staff {
      id
      firstName
      lastName
      phoneNo
      email
      staffType
    }
  }
}
`
export const ALL_STAFF = gql`
query {
  staff {
    id
    firstName
    lastName
    gender
    phoneNo
    email
    staffType
    branch {
      id
      name
      location
    }
  }
}`

export const ALL_ATTENDANCE = gql`
query {
  allAttendance {
    id
    staff {
      firstName
      lastName
      gender
      phoneNo
      email
      staffType
    }
    branch {
      id
      name
      location
    }
    isClockedOut
    createdAt
    updatedAt
  }
}`

export const ALL_CONSLUTATIONS = gql`
query {
  consultations {
    id
    patient {
      id
      firstName
      lastName
      consultations {
        id
      }
    }
  }
}
`
export const ALL_CONSULTATIONRATINGS = gql`
query {
  consultationRatings {
    id
    rating
    comment
    consultation {
      id
      createdAt
    }
    createdAt
  }
}`

export const ALL_PAYMENTS = gql`
query {
  payments {
    id
    consultation {
      id
      createdAt
    }
    Branch {
      name
      location
      id
    }
    amount
    mode
    description
    createdAt
  }
}`

export const ME = gql`
query {
  me {
    id
    firstName
    lastName
    email
  }
}
`
