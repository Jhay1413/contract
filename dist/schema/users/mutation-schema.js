"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSchema = exports.userLoginSchema = exports.userRegisterSchema = exports.userInfoMutationSchema = void 0;
const zod_1 = require("zod");
exports.userInfoMutationSchema = zod_1.z.object({
    email: zod_1.z.string(),
    employeeId: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    assignedDivision: zod_1.z.string(),
    assignedSection: zod_1.z.string(),
    dateStarted: zod_1.z.string(),
    jobStatus: zod_1.z.string(),
    contactNumber: zod_1.z.string(),
    birthDate: zod_1.z.string(),
    middleName: zod_1.z.nullable(zod_1.z.string()),
    imageUrl: zod_1.z.nullable(zod_1.z.string())
});
exports.userRegisterSchema = exports.userInfoMutationSchema.extend({
    password: zod_1.z.string(),
    accountRole: zod_1.z.string()
});
exports.userLoginSchema = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string()
});
//User Accounts
exports.AccountSchema = zod_1.z.object({
    id: zod_1.z.string(),
    email: zod_1.z.string(),
    accountRole: zod_1.z.string(),
    password: zod_1.z.string(),
});
