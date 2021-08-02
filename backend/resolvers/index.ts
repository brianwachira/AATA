import { AdminResolver } from "./AdminResolver";
import { ClinicResolver } from "./ClinicResolver";
import { ConsultationRatingResolver } from "./ConsultationRatingResolver";
import { ConsultationResolver } from "./ConsultationResolver";
import { DiagnosisResolver } from "./DiagnosisResolver";
import { DispatchOfficerResolver } from "./DispatchOfficerResolver";
import { GuardianResolver } from "./GuardianResolver";
import { IssuesResolver } from "./IssuesResolver";
import { NextOfKinResolver } from "./NextOfKinResolver";
import { PatientResolver } from "./PatientResolver";
import { StaffResolver } from "./StaffResolver";

/**
 * @description holds all resolvers
 */

export const resolvers = [AdminResolver, DispatchOfficerResolver, StaffResolver, ClinicResolver, PatientResolver, GuardianResolver, NextOfKinResolver, PatientResolver, ConsultationResolver, ConsultationRatingResolver, DiagnosisResolver, IssuesResolver];