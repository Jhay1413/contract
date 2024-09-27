"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyQuerySchema = exports.projectQuerySchema = exports.contactQuerySchema = void 0;
const zod_1 = require("zod");
exports.contactQuerySchema = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    name: zod_1.z.string(),
    contactNumber: zod_1.z.string(),
    email: zod_1.z.nullable(zod_1.z.string())
});
exports.projectQuerySchema = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    projectId: zod_1.z.string(),
    projectName: zod_1.z.string(),
    projectAddress: zod_1.z.string(),
    retainer: zod_1.z.boolean(),
    date_expiry: zod_1.z.nullable(zod_1.z.date()),
    contactPersons: zod_1.z.nullable(exports.contactQuerySchema).optional(),
    email: zod_1.z.nullable(zod_1.z.string())
});
exports.companyQuerySchema = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    companyId: zod_1.z.string(),
    companyName: zod_1.z.string(),
    companyAddress: zod_1.z.string(),
    email: zod_1.z.nullable(zod_1.z.string()),
    companyProjects: zod_1.z.nullable(zod_1.z.array(exports.projectQuerySchema)).optional(),
    contactPersons: zod_1.z.nullable(exports.contactQuerySchema).optional(),
});
