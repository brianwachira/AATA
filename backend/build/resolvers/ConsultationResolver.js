"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationResolver = void 0;
const ConsultationMutation_1 = require("../mutations/ConsultationMutation");
const ConsultationQuery_1 = require("../queries/ConsultationQuery");
/**
 * @description holds consultation resolver
 */
exports.ConsultationResolver = {
    Query: ConsultationQuery_1.ConsultationQuery,
    Mutation: ConsultationMutation_1.ConsultationMutation
};
