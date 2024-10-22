"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketFullDetailsSchema = exports.ticketingTableSchema = void 0;
const zod_1 = require("zod");
const query_schema_1 = require("../users/query-schema");
const query_schema_2 = require("../companies/query-schema");
exports.ticketingTableSchema = zod_1.z.object({
    id: zod_1.z.string(),
    ticketId: zod_1.z.string(),
    subject: zod_1.z.string(),
    status: zod_1.z.string(),
    priority: zod_1.z.string(),
    dueDate: zod_1.z.string(),
    createdAt: zod_1.z.string().optional(),
    updatedAt: zod_1.z.string().optional(),
    receiver: zod_1.z.object({
        firstName: zod_1.z.string(),
        lastName: zod_1.z.string(),
    }),
    sender: zod_1.z.object({
        firstName: zod_1.z.string(),
        lastName: zod_1.z.string(),
    }),
    project: zod_1.z.object({
        projectName: zod_1.z.string(),
    }).nullable(),
    transactionId: zod_1.z.string().nullable(),
    remarks: zod_1.z.string().nullable(),
});
exports.ticketFullDetailsSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    ticketId: zod_1.z.string(),
    subject: zod_1.z.string(),
    section: zod_1.z.string(),
    division: zod_1.z.string(),
    status: zod_1.z.string(),
    requestType: zod_1.z.string(),
    requestDetails: zod_1.z.string(),
    priority: zod_1.z.string(),
    dueDate: zod_1.z.string().datetime(),
    sender: query_schema_1.AccountQuerySchema,
    receiver: query_schema_1.AccountQuerySchema,
    requestee: query_schema_1.AccountQuerySchema,
    remarks: zod_1.z.string().nullable(),
    project: query_schema_2.projectQuerySchema.nullable(),
    transactionId: zod_1.z.string().nullable(),
    attachments: zod_1.z.string().nullable(),
});
