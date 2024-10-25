"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionTable = exports.transactionQueryData = exports.transactionLogsData = exports.completeStaffWorkQuerySchema = exports.filesQuerySchema = void 0;
const zod_1 = require("zod");
const query_schema_1 = require("../companies/query-schema");
const query_schema_2 = require("../users/query-schema");
const FileTypeEnum = zod_1.z.enum(["INITIAL_DOC", "FOLLOWED_UP"]);
exports.filesQuerySchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    remarks: zod_1.z.nullable(zod_1.z.string()),
    createdAt: zod_1.z.string().datetime().optional(),
    fileType: FileTypeEnum.optional(),
    fileName: zod_1.z.string(),
    fileStatus: zod_1.z.nullable(zod_1.z.string()).optional(),
    fileUrl: zod_1.z.nullable(zod_1.z.string()).optional(),
    fileOriginalName: zod_1.z.nullable(zod_1.z.string()).optional(),
});
exports.completeStaffWorkQuerySchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    date: zod_1.z.string().datetime(),
    remarks: zod_1.z.string(),
    createdAt: zod_1.z.string().datetime().optional(),
    updatedAt: zod_1.z.string().datetime().optional(),
    transactionId: zod_1.z.string().optional(),
    attachments: zod_1.z.array(zod_1.z.string()),
});
exports.transactionLogsData = zod_1.z.object({
    id: zod_1.z.string().optional(),
    transactionId: zod_1.z.string(),
    documentType: zod_1.z.string(),
    percentage: zod_1.z.number(),
    subject: zod_1.z.string(),
    dueDate: zod_1.z.nullable(zod_1.z.string().datetime()).optional(),
    documentSubType: zod_1.z.string(),
    createdAt: zod_1.z.string().datetime().optional(),
    updatedAt: zod_1.z.string().datetime().optional(),
    team: zod_1.z.nullable(zod_1.z.string()).optional(),
    status: zod_1.z.string(),
    priority: zod_1.z.string(),
    company: zod_1.z.string(),
    project: zod_1.z.string(),
    remarks: zod_1.z.string(),
    receiver: zod_1.z.nullable(zod_1.z.string()).optional(),
    forwarder: zod_1.z.string(),
    dateForwarded: zod_1.z.string().datetime(),
    dateReceived: zod_1.z.nullable(zod_1.z.string().datetime()).optional(),
    originDepartment: zod_1.z.string(),
    targetDepartment: zod_1.z.string(),
    attachments: zod_1.z.array(exports.filesQuerySchema).optional(),
});
exports.transactionQueryData = zod_1.z.object({
    id: zod_1.z.string().optional(),
    transactionId: zod_1.z.string(),
    documentType: zod_1.z.string(),
    documentSubType: zod_1.z.string(),
    subject: zod_1.z.string(),
    dueDate: zod_1.z.string().datetime(),
    team: zod_1.z.string(),
    status: zod_1.z.string(),
    priority: zod_1.z.string(),
    percentage: zod_1.z.number(),
    category: zod_1.z.string(),
    originDepartment: zod_1.z.string().optional(),
    targetDepartment: zod_1.z.string().optional(),
    remarks: zod_1.z.string(),
    dateForwarded: zod_1.z.nullable(zod_1.z.string().datetime()),
    dateReceived: zod_1.z.nullable(zod_1.z.string().datetime()).optional(),
    attachments: zod_1.z.array(exports.filesQuerySchema).optional(),
    forwarder: query_schema_2.AccountQuerySchema.optional(),
    receiver: zod_1.z.nullable(query_schema_2.AccountQuerySchema).optional(),
    company: query_schema_1.companyQuerySchema.optional(),
    project: query_schema_1.projectQuerySchema.optional(),
    transactionLogs: zod_1.z.array(exports.transactionLogsData).optional(),
    completeStaffWork: zod_1.z.array(exports.completeStaffWorkQuerySchema).optional(),
    projectName: zod_1.z.string().optional(),
    receiverName: zod_1.z.string().optional(),
    forwarderName: zod_1.z.string().optional(),
    receiverId: zod_1.z.nullable(zod_1.z.string()).optional(),
    forwarderId: zod_1.z.string(),
    companyId: zod_1.z.string(),
    projectId: zod_1.z.string(),
});
//new schema
exports.transactionTable = zod_1.z.object({
    id: zod_1.z.string(),
    transactionId: zod_1.z.string(),
    documentSubType: zod_1.z.string(),
    documentType: zod_1.z.string(),
    subject: zod_1.z.string(),
    status: zod_1.z.string(),
    priority: zod_1.z.string(),
    dueDate: zod_1.z.string().datetime(),
    project: zod_1.z.object({
        projectName: zod_1.z.string(),
    }),
    company: zod_1.z.object({
        companyName: zod_1.z.string(),
    }),
    percentage: zod_1.z.number(),
    receiver: zod_1.z.nullable(zod_1.z.string()),
    forwarder: zod_1.z.nullable(zod_1.z.string()),
});
