import { IResolvers } from "@graphql-tools/utils";
import { PaymentMutation } from "../mutations/PaymentMutation";
import { PaymentQuery } from "../queries/PaymentQuery";
/**
 * @description holds payments resolver
 */
export const PaymentsResolver: IResolvers = {
    Query: PaymentQuery,
    Mutation: PaymentMutation
};