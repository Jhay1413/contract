import { z } from "zod";
export declare const userInfoMutationSchema: z.ZodObject<{
    email: z.ZodString;
    employeeId: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    assignedDivision: z.ZodString;
    assignedSection: z.ZodNullable<z.ZodString>;
    dateStarted: z.ZodString;
    jobStatus: z.ZodString;
    contactNumber: z.ZodString;
    birthDate: z.ZodString;
    middleName: z.ZodNullable<z.ZodString>;
    imageUrl: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    contactNumber: string;
    employeeId: string;
    firstName: string;
    lastName: string;
    assignedDivision: string;
    assignedSection: string | null;
    dateStarted: string;
    jobStatus: string;
    birthDate: string;
    middleName: string | null;
    imageUrl: string | null;
}, {
    email: string;
    contactNumber: string;
    employeeId: string;
    firstName: string;
    lastName: string;
    assignedDivision: string;
    assignedSection: string | null;
    dateStarted: string;
    jobStatus: string;
    birthDate: string;
    middleName: string | null;
    imageUrl: string | null;
}>;
export declare const userRegisterSchema: z.ZodObject<z.objectUtil.extendShape<{
    email: z.ZodString;
    employeeId: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    assignedDivision: z.ZodString;
    assignedSection: z.ZodNullable<z.ZodString>;
    dateStarted: z.ZodString;
    jobStatus: z.ZodString;
    contactNumber: z.ZodString;
    birthDate: z.ZodString;
    middleName: z.ZodNullable<z.ZodString>;
    imageUrl: z.ZodNullable<z.ZodString>;
}, {
    password: z.ZodString;
    accountRole: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    email: string;
    contactNumber: string;
    employeeId: string;
    firstName: string;
    lastName: string;
    assignedDivision: string;
    assignedSection: string | null;
    dateStarted: string;
    jobStatus: string;
    birthDate: string;
    middleName: string | null;
    imageUrl: string | null;
    password: string;
    accountRole: string;
}, {
    email: string;
    contactNumber: string;
    employeeId: string;
    firstName: string;
    lastName: string;
    assignedDivision: string;
    assignedSection: string | null;
    dateStarted: string;
    jobStatus: string;
    birthDate: string;
    middleName: string | null;
    imageUrl: string | null;
    password: string;
    accountRole: string;
}>;
export declare const userLoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const AccountSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    accountRole: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    password: string;
    accountRole: string;
}, {
    id: string;
    email: string;
    password: string;
    accountRole: string;
}>;
