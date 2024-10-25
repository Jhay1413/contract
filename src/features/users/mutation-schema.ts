import { object, string, TypeOf, optional, nullable, z } from "zod";

export const userInfoMutationSchema = z.object({
  email: z.string(),
  employeeId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  assignedDivision: z.string(),
  assignedSection: z.nullable(z.string()),
  dateStarted: z.string(),
  jobStatus: z.string(),
  contactNumber: z.string(),
  birthDate: z.string(),
  middleName: z.nullable(z.string()),
  imageUrl: z.nullable(z.string()),
});

export const userRegisterSchema = userInfoMutationSchema.extend({
  password: z.string(),
  accountRole: z.string(),
});

export const userLoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

//User Accounts
export const AccountSchema = z.object({
  id: z.string(),
  email: z.string(),
  accountRole: z.string(),
  password: z.string(),
});
