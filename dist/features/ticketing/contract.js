"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const query_schema_1 = require("./query-schema");
const mutation_schema_1 = require("./mutation-schema");
const contract = (0, core_1.initContract)();
exports.ticketContract = contract.router({
    getTickets: {
        method: "GET",
        path: "/tickets",
        query: zod_1.z.object({
            query: zod_1.z.string(),
            page: zod_1.z.string(),
            pageSize: zod_1.z.string(),
        }),
        responses: {
            200: zod_1.z.array(query_schema_1.ticketingTableSchema),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    getTicketsById: {
        method: "GET",
        path: "/tickets/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        responses: {
            200: query_schema_1.ticketFullDetailsSchema,
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    createTickets: {
        method: "POST",
        path: "/tickets",
        body: mutation_schema_1.ticketingMutationSchema,
        responses: {
            200: zod_1.z.object({
                message: zod_1.z.string(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    editTickets: {
        method: "PUT",
        path: "/tickets/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: mutation_schema_1.ticketEditSchema,
        responses: {
            200: zod_1.z.object({
                message: zod_1.z.string(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    forwardTickets: {
        method: "PUT",
        path: "/tickets/:id/forward",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: mutation_schema_1.ticketEditSchema,
        responses: {
            200: zod_1.z.object({
                message: zod_1.z.string(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
});