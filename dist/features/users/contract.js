"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAccountsContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const contract = (0, core_1.initContract)();
exports.userAccountsContract = contract.router({
    getUsersForTickets: {
        method: "GET",
        path: "/user/forward-to",
        query: zod_1.z.object({
            division: zod_1.z.string(),
            section: zod_1.z.string(),
            role: zod_1.z.string(),
            mode: zod_1.z.string(),
        }),
        responses: {
            200: zod_1.z.array(zod_1.z.object({
                id: zod_1.z.string(),
                userInfo: zod_1.z.object({
                    firstName: zod_1.z.string(),
                    lastName: zod_1.z.string(),
                }),
                accountRole: zod_1.z.enum([
                    "SUPERADMIN",
                    "ADMIN",
                    "TL",
                    "CH",
                    "GUEST",
                    "RECORDS",
                    "MANAGER",
                    "QA",
                    "DMS",
                    "FINANCE",
                ]),
            })),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    getUserInfoForSelect: {
        method: "GET",
        path: "/user/user-info",
        query: zod_1.z.object({
            query: zod_1.z.string(),
        }),
        responses: {
            200: zod_1.z.array(zod_1.z.object({
                label: zod_1.z.string(),
                value: zod_1.z.string(),
            })),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    getUserByRoleAccess: {
        method: "GET",
        path: "/user/user-by-roles",
        query: zod_1.z.object({
            id: zod_1.z.string(),
            targetDivision: zod_1.z.string(),
            team: zod_1.z.nullable(zod_1.z.string()),
        }),
        responses: {
            200: zod_1.z.array(zod_1.z.object({
                accountId: zod_1.z.string(),
                firstName: zod_1.z.string(),
                lastName: zod_1.z.string(),
                account: zod_1.z.object({
                    accountRole: zod_1.z.enum([
                        "SUPERADMIN",
                        "ADMIN",
                        "TL",
                        "CH",
                        "GUEST",
                        "RECORDS",
                        "MANAGER",
                        "QA",
                        "DMS",
                        "FINANCE",
                    ]),
                }),
            })),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
});
