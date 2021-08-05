"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const patientSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nationalID: {
        type: String,
        required: false,
        index: {
            unique: true,
            partialFilterExpression: { nationalID: { $type: "string" } }
        }
    },
    phoneNo: {
        type: String,
        required: false,
        index: {
            unique: true,
            partialFilterExpression: { phoneNo: { $type: "string" } }
        }
    },
    email: {
        type: String,
        required: false,
        index: {
            unique: true,
            partialFilterExpression: { email: { $type: "string" } }
        }
    },
    branchOfRegistry: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Clinic'
    },
    guardians: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Guardian'
    },
    nextOfKin: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'NextOfKin'
    },
    consultations: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Consultation'
        }
    ],
}, { timestamps: true });
patientSchema.plugin(mongoose_unique_validator_1.default);
const Patient = mongoose_1.default.model('Patient', patientSchema);
exports.default = Patient;
