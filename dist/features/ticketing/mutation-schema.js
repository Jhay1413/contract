"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketEditSchema = exports.ticketingMutationSchema = exports.sizeInMB = exports.MAX_FILE_SIZE_10MB = exports.MAX_FILE_SIZE_50MB = void 0;
const zod_1 = require("zod");
exports.MAX_FILE_SIZE_50MB = 50;
exports.MAX_FILE_SIZE_10MB = 10;
const sizeInMB = (sizeInBytes, decimalsNum = 2) => {
    const result = sizeInBytes / (1024 * 1024);
    return +result.toFixed(decimalsNum);
};
exports.sizeInMB = sizeInMB;
exports.ticketingMutationSchema = zod_1.z.object({
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
    dateForwarded: zod_1.z.string().datetime(),
    dateReceived: zod_1.z.nullable(zod_1.z.string().datetime()),
    senderId: zod_1.z.string(),
    receiverId: zod_1.z.nullable(zod_1.z.string()).optional(),
    requesteeId: zod_1.z.string(),
    remarks: zod_1.z.string().nullable(),
    projectId: zod_1.z.string().nullable(),
    transactionId: zod_1.z.string().nullable(),
    attachments: zod_1.z.array(zod_1.z.string()),
});
exports.ticketEditSchema = exports.ticketingMutationSchema.extend({
    id: zod_1.z.string(),
});
