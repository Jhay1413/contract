"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const query_schema_1 = require("./query-schema");
const contract = (0, core_1.initContract)();
exports.notificationContract = contract.router({
    readNotif: {
        method: "PUT",
        path: "/notification/:id/read",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: zod_1.z.object({
            dateRead: zod_1.z.string().datetime(),
        }),
        responses: {
            200: zod_1.z.object({
                message: zod_1.z.string(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    getNotificationsByUserId: {
        method: "GET",
        path: "/notification/userNotif",
        query: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        responses: {
            200: zod_1.z.array(query_schema_1.notification),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
});
