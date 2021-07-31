import { AdminSchema } from "./AdminSchema";
import { ClinicSchema } from "./ClinicSchema";
import { DefaultSchema } from "./DefaultSchema";
import { DispatchOfficerSchema } from "./DispatchOfficerSchema";
import { StaffSchema } from "./StaffSchema";
/**
 * @description holds all schemas
 */

export const schema = [DefaultSchema, AdminSchema, ClinicSchema, DispatchOfficerSchema,StaffSchema];