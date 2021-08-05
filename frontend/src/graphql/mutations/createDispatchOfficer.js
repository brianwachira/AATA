import { gql } from '@apollo/client';

export const CREATE_DISPATCH_OFFICER = gql`mutation createDispatchOfficer($FirstName: String!, $LastName: String!, $Dob: String!, $Gender: String!, $NationalId: String!, $PhoneNo: String!, $Email: String!, $Password: String!) {
    createDispatchOfficer(firstName: $FirstName, lastName: $LastName, DOB: $Dob, gender: $Gender, nationalID: $NationalId, phoneNo: $PhoneNo, email: $Email, password: $Password) {
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
  