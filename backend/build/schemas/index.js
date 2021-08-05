"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const AdminSchema_1 = require("./AdminSchema");
const ClinicSchema_1 = require("./ClinicSchema");
const ConsultationRatingSchema_1 = require("./ConsultationRatingSchema");
const ConsultationSchema_1 = require("./ConsultationSchema");
const DefaultSchema_1 = require("./DefaultSchema");
const DiagnosisSchema_1 = require("./DiagnosisSchema");
const DispatchOfficerSchema_1 = require("./DispatchOfficerSchema");
const GuardianSchema_1 = require("./GuardianSchema");
const IssuesSchema_1 = require("./IssuesSchema");
const NextOfKinSchema_1 = require("./NextOfKinSchema");
const PatientSchema_1 = require("./PatientSchema");
const RemedySchema_1 = require("./RemedySchema");
const StaffSchema_1 = require("./StaffSchema");
/**
 * @description holds all schemas
 */
exports.schema = [DefaultSchema_1.DefaultSchema, AdminSchema_1.AdminSchema, ClinicSchema_1.ClinicSchema, DispatchOfficerSchema_1.DispatchOfficerSchema, StaffSchema_1.StaffSchema, PatientSchema_1.PatientSchema, GuardianSchema_1.GuardianSchema, NextOfKinSchema_1.NextOfKinSchema, ConsultationSchema_1.ConsultationSchema, ConsultationRatingSchema_1.ConsultationRatingSchema, RemedySchema_1.RemedySchema, DiagnosisSchema_1.DiagnosisSchema, IssuesSchema_1.IssuesSchema];
