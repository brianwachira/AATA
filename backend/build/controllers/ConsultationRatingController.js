"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConsultationRating = exports.getAllConsultationRatings = exports.updateConsultationRating = exports.createConsultationRating = void 0;
const apollo_server_1 = require("apollo-server");
const ConsultationRatings_1 = __importDefault(require("../models/ConsultationRatings"));
const Consultations_1 = __importDefault(require("../models/Consultations"));
/**
 * @description holds crud operations for consultation rating
 */
/**
 * creates ConsultationRating
 * @param args {NewConsultationRatingEntry} Consultation Rating
 * @returns {consultationRating} created Consultation Rating
 */
const createConsultationRating = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const consultationExists = yield Consultations_1.default.findById(args.consultationID);
    if (!consultationExists) {
        throw new apollo_server_1.UserInputError("Consultation not available", { invalidArgs: args });
    }
    let newConsultationRating = new ConsultationRatings_1.default(args);
    try {
        newConsultationRating = yield newConsultationRating.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return newConsultationRating;
});
exports.createConsultationRating = createConsultationRating;
/**
 * updates Consultation Rating
 * @param args Consultation Rating
 * @returns {consultationRating} updated Consultation Rating
 */
const updateConsultationRating = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let consultationRating = yield ConsultationRatings_1.default.findById(args._id);
    if (!consultationRating) {
        throw new apollo_server_1.UserInputError("Guardian not available", { invalidArgs: args });
    }
    consultationRating = args;
    try {
        yield consultationRating.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return consultationRating;
});
exports.updateConsultationRating = updateConsultationRating;
/**
 * get all Consultation Ratings
 * @returns {consultationRating[]} list all of Consultation Ratings
 */
const getAllConsultationRatings = () => __awaiter(void 0, void 0, void 0, function* () {
    const consultationRatings = yield ConsultationRatings_1.default.find({}).populate('consultations');
    return consultationRatings;
});
exports.getAllConsultationRatings = getAllConsultationRatings;
/**
 * gets Consultation Rating by id
 * @param args id
 * @returns {consultationRating} Consultation Rating
 */
const getConsultationRating = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const consultationRating = yield ConsultationRatings_1.default.findById(args).populate('consultations');
    if (!consultationRating) {
        throw new apollo_server_1.UserInputError("Consultation Ratings is not available", { invalidArgs: args.id });
    }
    return consultationRating;
});
exports.getConsultationRating = getConsultationRating;
