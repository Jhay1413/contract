"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardData = void 0;
const zod_1 = require("zod");
const dashboardData = zod_1.z.object({
    priority: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        percentage: zod_1.z.number(),
        project: zod_1.z.object({
            projectName: zod_1.z.string(),
        }),
        transactionId: zod_1.z.string(),
    })),
    perApplication: zod_1.z.array(zod_1.z.object({
        category: zod_1.z.string(),
        count: zod_1.z.number(),
    })),
    perSection: zod_1.z.array(zod_1.z.object({
        section: zod_1.z.string(),
        count: zod_1.z.number(),
    })),
    totalProject: zod_1.z.number(),
});
exports.dashboardData = dashboardData;
