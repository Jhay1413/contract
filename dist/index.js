"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesMutationSchema = exports.filesQuerySchema = exports.contracts = exports.transactionLogsData = exports.transactionMutationSchema = exports.companyQuerySchema = exports.transactionQueryData = exports.transactionContract = exports.companyContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const company_schema_1 = require("./schema/company-schema");
const query_schema_1 = require("./schema/transactions/query-schema");
Object.defineProperty(exports, "filesQuerySchema", { enumerable: true, get: function () { return query_schema_1.filesQuerySchema; } });
Object.defineProperty(exports, "transactionLogsData", { enumerable: true, get: function () { return query_schema_1.transactionLogsData; } });
Object.defineProperty(exports, "transactionQueryData", { enumerable: true, get: function () { return query_schema_1.transactionQueryData; } });
const query_schema_2 = require("./schema/companies/query-schema");
Object.defineProperty(exports, "companyQuerySchema", { enumerable: true, get: function () { return query_schema_2.companyQuerySchema; } });
const mutation_schema_1 = require("./schema/transactions/mutation-schema");
Object.defineProperty(exports, "filesMutationSchema", { enumerable: true, get: function () { return mutation_schema_1.filesMutationSchema; } });
Object.defineProperty(exports, "transactionMutationSchema", { enumerable: true, get: function () { return mutation_schema_1.transactionMutationSchema; } });
const contract = (0, core_1.initContract)();
exports.companyContract = contract.router({
    insertCompany: {
        method: "POST",
        path: "/companies",
        responses: {
            201: company_schema_1.companyFormData,
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
        body: company_schema_1.companyFormData,
    },
    fetchCompanies: {
        method: "GET",
        path: "/companies",
        responses: {
            200: zod_1.z.array(company_schema_1.companyFormData).nullable(),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    fetchCompany: {
        method: "GET",
        path: "/company/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        responses: {
            200: company_schema_1.companyFormData.nullable(),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    deleteCompanyById: {
        method: "DELETE",
        path: "/company/",
        body: zod_1.z.object({
            id: zod_1.z.string()
        }),
        responses: {
            200: zod_1.z.object({
                id: zod_1.z.string(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    editCompanyById: {
        method: "PUT",
        path: "/company/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.string()
        }),
        body: company_schema_1.companyFormData,
        responses: {
            201: company_schema_1.companyFormData,
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        }
    }
});
exports.transactionContract = contract.router({
    searchTransactions: {
        method: "GET",
        path: "/transactions/search",
        query: zod_1.z.object({
            query: zod_1.z.string(),
            status: zod_1.z.string().optional(),
            page: zod_1.z.string(),
            pageSize: zod_1.z.string(),
        }),
        responses: {
            201: zod_1.z.array(query_schema_1.transactionQueryData).nullable(),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        }
    },
    // fetchTransactions: {
    //   method: "GET",
    //   path: "/transactions",
    //   responses: {
    //     200: z.array(transactionQueryData),
    //     500: z.object({
    //       error: z.string(),
    //     }),
    //   },
    // },
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
    updateTransaction: {
        method: "PUT",
        path: "/transactions/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.string(),
        }),
        body: mutation_schema_1.transactionMutationSchema,
        responses: {
            200: query_schema_1.transactionQueryData.nullable(),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    insertTransacitons: {
        method: "POST",
        path: "/transactions",
        body: mutation_schema_1.transactionMutationSchema,
        responses: {
            201: zod_1.z.array(query_schema_1.transactionQueryData),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        }
    },
});
const contracts = contract.router({
    company: exports.companyContract,
    transaction: exports.transactionContract
});
exports.contracts = contracts;
