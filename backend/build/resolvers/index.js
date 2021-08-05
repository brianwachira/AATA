"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const AdminResolver_1 = require("./AdminResolver");
const ClinicResolver_1 = require("./ClinicResolver");
const ConsultationRatingResolver_1 = require("./ConsultationRatingResolver");
const ConsultationResolver_1 = require("./ConsultationResolver");
const DiagnosisResolver_1 = require("./DiagnosisResolver");
const DispatchOfficerResolver_1 = require("./DispatchOfficerResolver");
const GuardianResolver_1 = require("./GuardianResolver");
const IssuesResolver_1 = require("./IssuesResolver");
const NextOfKinResolver_1 = require("./NextOfKinResolver");
const PatientResolver_1 = require("./PatientResolver");
const StaffResolver_1 = require("./StaffResolver");
/**
 * @description holds all resolvers
 */
exports.resolvers = [AdminResolver_1.AdminResolver, DispatchOfficerResolver_1.DispatchOfficerResolver, StaffResolver_1.StaffResolver, ClinicResolver_1.ClinicResolver, PatientResolver_1.PatientResolver, GuardianResolver_1.GuardianResolver, NextOfKinResolver_1.NextOfKinResolver, PatientResolver_1.PatientResolver, ConsultationResolver_1.ConsultationResolver, ConsultationRatingResolver_1.ConsultationRatingResolver, DiagnosisResolver_1.DiagnosisResolver, IssuesResolver_1.IssuesResolver];
