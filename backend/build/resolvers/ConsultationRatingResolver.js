"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationRatingResolver = void 0;
const ConsultationRatingMutation_1 = require("../mutations/ConsultationRatingMutation");
const ConsultationRatingQuery_1 = require("../queries/ConsultationRatingQuery");
/**
 * @description holds consultation rating resolver
 */
exports.ConsultationRatingResolver = {
    Query: ConsultationRatingQuery_1.ConsultationRatingQuery,
    Mutation: ConsultationRatingMutation_1.ConsultationRatingMutation
};
