import { AdminSchema } from "./AdminSchema";
import { ClinicSchema } from "./ClinicSchema";
import { ConsultationRatingSchema } from "./ConsultationRatingSchema";
import { ConsultationSchema } from "./ConsultationSchema";
import { DefaultSchema } from "./DefaultSchema";
import { DispatchOfficerSchema } from "./DispatchOfficerSchema";
import { GuardianSchema } from "./GuardianSchema";
import { NextOfKinSchema } from "./NextOfKinSchema";
import { PatientSchema } from "./PatientSchema";
import { RemedySchema } from "./RemedySchema";
import { StaffSchema } from "./StaffSchema";
/**
 * @description holds all schemas
 */

export const schema = [DefaultSchema, AdminSchema, ClinicSchema, DispatchOfficerSchema,StaffSchema, PatientSchema, GuardianSchema, NextOfKinSchema, ConsultationSchema, ConsultationRatingSchema, RemedySchema];