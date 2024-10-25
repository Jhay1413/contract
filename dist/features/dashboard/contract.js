"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardContract = void 0;
const core_1 = require("@ts-rest/core");
const dashboard_data_1 = require("./dashboard-data");
const zod_1 = require("zod");
const contract = (0, core_1.initContract)();
exports.dashboardContract = contract.router({
    getDashboardData: {
        method: "GET",
        path: "/dashboard/data",
        responses: {
            200: dashboard_data_1.dashboardData,
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
});
