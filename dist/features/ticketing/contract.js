"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const query_schema_1 = require("./query-schema");
const mutation_schema_1 = require("./mutation-schema");
const contract = (0, core_1.initContract)();
exports.ticketContract = contract.router({
    updateTicketOnInboxRoutes: {
        method: "PUT",
        path: "/tickets/:id/updateOnInbox",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: zod_1.z.object({
            status: zod_1.z.string(),
            remarks: zod_1.z.string(),
        }),
        responses: {
            201: zod_1.z.object({
                message: zod_1.z.string(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    fetchPendingRequesteeTicketRoutes: {
        method: "GET",
        path: "/tickets/pendingTickets",
        query: zod_1.z.object({
            query: zod_1.z.string(),
            priority: zod_1.z.string().optional(),
            state: zod_1.z.string().optional(),
            page: zod_1.z.string(),
            pageSize: zod_1.z.string(),
            userId: zod_1.z.string().optional(),
            sortOrder: zod_1.z.string(),
            projectId: zod_1.z.string().optional(),
            transactionId: zod_1.z.string().optional(),
            senderId: zod_1.z.string().optional(),
            status: zod_1.z.string().optional(),
        }),
        responses: {
            200: zod_1.z.object({
                data: zod_1.z.array(query_schema_1.ticketingTableSchema),
                numOfTickets: zod_1.z.number(),
                totalPages: zod_1.z.number(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    getTickets: {
        method: "GET",
        path: "/tickets",
        query: zod_1.z.object({
            query: zod_1.z.string(),
            priority: zod_1.z.string().optional(),
            state: zod_1.z.string().optional(),
            page: zod_1.z.string(),
            pageSize: zod_1.z.string(),
            userId: zod_1.z.string().optional(),
            sortOrder: zod_1.z.string(),
            projectId: zod_1.z.string().optional(),
            transactionId: zod_1.z.string().optional(),
            senderId: zod_1.z.string().optional(),
            status: zod_1.z.string().optional(),
        }),
        responses: {
            200: zod_1.z.object({
                data: zod_1.z.array(query_schema_1.ticketingTableSchema),
                numOfTickets: zod_1.z.number(),
                totalPages: zod_1.z.number(),
            }),
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
    receiveTickets: {
        method: "PUT",
        path: "/tickets/:id/receive",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: zod_1.z.object({
            dateReceived: zod_1.z.string().datetime(),
        }),
        responses: {
            201: zod_1.z.object({
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
    resolveTickets: {
        method: "PUT",
        path: "/tickets/:id/resolve",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: zod_1.z.object({
            userId: zod_1.z.string(),
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
    reopenTickets: {
        method: "PUT",
        path: "/tickets/:id/reopen",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: zod_1.z.object({
            requestee: zod_1.z.string(),
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
});
