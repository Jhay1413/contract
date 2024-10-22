"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notification = void 0;
const zod_1 = require("zod");
exports.notification = zod_1.z.object({
    id: zod_1.z.string().optional(),
    createdAt: zod_1.z.string().datetime(),
    message: zod_1.z.string(),
    transactionId: zod_1.z.string(),
    forwarderId: zod_1.z.string(),
    receiverId: zod_1.z.string(),
    isRead: zod_1.z.boolean(),
    dateRead: zod_1.z.nullable(zod_1.z.string().datetime()),
});
