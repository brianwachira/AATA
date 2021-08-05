"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextOfKinResolver = void 0;
const NextOfKinMutation_1 = require("../mutations/NextOfKinMutation");
const NextOfKinQuery_1 = require("../queries/NextOfKinQuery");
/**
 * @description holds nextofkin resolver
 */
exports.NextOfKinResolver = {
    Query: NextOfKinQuery_1.NextOfKinQuery,
    Mutation: NextOfKinMutation_1.NextOfKinMutation
};
