import { AdminResolver } from "./AdminResolver";
import { ClinicResolver } from "./ClinicResolver";
import { DispatchOfficerResolver } from "./DispatchOfficerResolver";
import { GuardianResolver } from "./GuardianResolver";
import { NextOfKinResolver } from "./NextOfKinResolver";
import { PatientResolver } from "./PatientResolver";
import { StaffResolver } from "./StaffResolver";

/**
 * @description holds all resolvers
 */

export const resolvers = [AdminResolver, DispatchOfficerResolver, StaffResolver, ClinicResolver, PatientResolver, GuardianResolver, NextOfKinResolver];