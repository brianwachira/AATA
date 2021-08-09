import { gql } from '@apollo/client';

export const CREATE_DISPATCH_OFFICER = gql`
  mutation createDispatchOfficer($firstName: String!, $lastName: String!, $dob: String!, $gender: String!, $id: String!, $phoneNo: String!, $email: String!, $password: String!) {
    createDispatchOfficer(firstName: $firstName, lastName: $lastName, DOB: $dob, gender: $gender, nationalID: $id, phoneNo: $phoneNo, email: $email, password: $password) {
      id
      firstName
      lastName
      DOB
      gender
      nationalID
      phoneNo
      email
    }
}`

export const LOGIN = gql`
mutation login($email: String!, $password: String) {
  login(email: $email, password: $password) {
    value
  }
}
`
