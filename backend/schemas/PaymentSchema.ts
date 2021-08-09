import { gql } from "apollo-server";
/**
 * @description holds payment schema
 */

export const PaymentSchema = gql`
enum MODE {
    BANK
    CASHMOBILEMONEY
    OTHER
}
type Payment {
    id: String,
    consultation: Consultation!,
    Branch: Clinic!,
    amount: Float!,
    mode: MODE!,
    description: String,
    createdAt: String!,
    updatedAt: String!
}
extend type Query{
    payments: [Payment],
    payment(id: String!): Payment
}
extend type Mutation{
    createPayment(
        consultation: String!,
        Branch: String!,
        amount: Float!,
        mode: String!,
        description: String): Payment,
    updatePayment(
        id: String!
        description: String!): Payment
}
`;