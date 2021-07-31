import { AdminResolver } from "./AdminResolver";
import { ClinicResolver } from "./ClinicResolver";
import { DispatchOfficerResolver } from "./DispatchOfficerResolver";
import { StaffResolver } from "./StaffResolver";

/**
 * @description holds all resolvers
 */

export const resolvers = [AdminResolver, DispatchOfficerResolver, StaffResolver, ClinicResolver];