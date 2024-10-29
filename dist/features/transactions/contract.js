"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const query_schema_1 = require("./query-schema");
const mutation_schema_1 = require("./mutation-schema");
const contract = (0, core_1.initContract)();
exports.transactionContract = contract.router({
    // Transaction Management
    insertTransactions: {
        method: "POST",
        path: "/transactions",
        body: mutation_schema_1.transactionMutationSchema,
        responses: {
            201: zod_1.z.array(query_schema_1.transactionQueryData),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    updateTransaction: {
        method: "PUT",
        path: "/transactions/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: mutation_schema_1.transactionMutationSchema,
        responses: {
            200: zod_1.z.object({
                success: zod_1.z.string(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    fetchTransactionById: {
        method: "GET",
        path: "/transactions/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        responses: {
            200: query_schema_1.transactionQueryData.nullable(),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    // Transaction Actions
    archivedTransaction: {
        method: "PUT",
        path: "/transactions/archived/:id",
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
    receivedTransaction: {
        method: "PUT",
        path: "/transactions/received/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: zod_1.z.object({
            dateReceived: zod_1.z.string().datetime(),
        }),
        responses: {
            201: query_schema_1.transactionTable,
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    addCompleteStaffWork: {
        method: "PUT",
        path: "/transactions/addCsw/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: mutation_schema_1.completeStaffWorkMutationSchema,
        responses: {
            201: query_schema_1.transactionQueryData,
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    // Transaction Queries
    fetchTransactionsV2: {
        method: "GET",
        path: "/transactions/list",
        query: zod_1.z.object({
            query: zod_1.z.string(),
            status: zod_1.z.string().optional(),
            page: zod_1.z.string(),
            pageSize: zod_1.z.string(),
            userId: zod_1.z.string().optional(),
        }),
        responses: {
            201: zod_1.z.object({
                data: zod_1.z.array(query_schema_1.transactionTable),
                numOfTransactions: zod_1.z.number(),
                totalPages: zod_1.z.number(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    getTransactionByParams: {
        method: "GET",
        path: "/transactions/",
        query: zod_1.z.object({
            status: zod_1.z.string(),
            accountId: zod_1.z.string(),
        }),
        responses: {
            200: zod_1.z.array(query_schema_1.transactionQueryData),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    searchTransactionById: {
        method: "GET",
        path: "/transactions/transaction/search",
        query: zod_1.z.object({
            transactionId: zod_1.z.string(),
        }),
        responses: {
            200: zod_1.z.array(zod_1.z.object({
                id: zod_1.z.string(),
                transactionId: zod_1.z.string(),
                documentSubType: zod_1.z.string(),
            })),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
});
