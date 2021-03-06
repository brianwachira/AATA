import { AdminSchema } from "./AdminSchema";
import { AttendanceSchema } from "./AttendanceSchema";
import { ClinicSchema } from "./ClinicSchema";
import { ConsultationRatingSchema } from "./ConsultationRatingSchema";
import { ConsultationSchema } from "./ConsultationSchema";
import { DefaultSchema } from "./DefaultSchema";
import { DiagnosisSchema } from "./DiagnosisSchema";
import { DispatchOfficerSchema } from "./DispatchOfficerSchema";
import { GuardianSchema } from "./GuardianSchema";
import { IssuesSchema } from "./IssuesSchema";
import { NextOfKinSchema } from "./NextOfKinSchema";
import { PatientSchema } from "./PatientSchema";
import { PaymentSchema } from "./PaymentSchema";
import { RemedySchema } from "./RemedySchema";
import { StaffSchema } from "./StaffSchema";
/**
 * @description holds all schemas
 */

export const schema = [DefaultSchema, AdminSchema, ClinicSchema, DispatchOfficerSchema,StaffSchema, PatientSchema, GuardianSchema, NextOfKinSchema, ConsultationSchema, ConsultationRatingSchema, RemedySchema, DiagnosisSchema, IssuesSchema, AttendanceSchema, PaymentSchema];