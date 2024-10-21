"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketEditSchema = exports.ticketingMutationSchema = void 0;
const zod_1 = require("zod");
exports.ticketingMutationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    ticketId: zod_1.z.string(),
    subject: zod_1.z.string(),
    section: zod_1.z.string(),
    division: zod_1.z.string(),
    status: zod_1.z.enum(["ON-PROCESS", "APPROVED", "RESOLVED", "FOR SIGN AND SEAL", "ARCHIVED"]),
    requestType: zod_1.z.string(),
    requestDetails: zod_1.z.string(),
    priority: zod_1.z.enum(["LOW", "IMPORTANT", "URGENT"]),
    dueDate: zod_1.z.string().datetime(),
    senderId: zod_1.z.string(),
    receiverId: zod_1.z.string(),
    requesteeId: zod_1.z.string(),
    remarks: zod_1.z.string().nullable(),
    projectId: zod_1.z.string().nullable(),
    transactionId: zod_1.z.string().nullable(),
    attachments: zod_1.z.string().nullable(),
});
exports.ticketEditSchema = exports.ticketingMutationSchema.extend({
    id: zod_1.z.string()
});
