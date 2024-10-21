"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketFullDetailsSchema = exports.ticketEditSchema = exports.ticketingTableSchema = exports.ticketingMutationSchema = exports.dashboardData = exports.transactionTable = exports.userInfoQuerySchema = exports.filesMutationSchema = exports.filesQuerySchema = exports.contracts = exports.transactionLogsData = exports.transactionMutationSchema = exports.companyQuerySchema = exports.transactionQueryData = exports.companyFormData = exports.transactionContract = exports.companyContract = exports.userAccountsContract = exports.awsContract = exports.dashboardContract = exports.ticketContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const company_schema_1 = require("./schema/company-schema");
Object.defineProperty(exports, "companyFormData", { enumerable: true, get: function () { return company_schema_1.companyFormData; } });
const query_schema_1 = require("./schema/transactions/query-schema");
Object.defineProperty(exports, "filesQuerySchema", { enumerable: true, get: function () { return query_schema_1.filesQuerySchema; } });
Object.defineProperty(exports, "transactionLogsData", { enumerable: true, get: function () { return query_schema_1.transactionLogsData; } });
Object.defineProperty(exports, "transactionQueryData", { enumerable: true, get: function () { return query_schema_1.transactionQueryData; } });
Object.defineProperty(exports, "transactionTable", { enumerable: true, get: function () { return query_schema_1.transactionTable; } });
const query_schema_2 = require("./schema/companies/query-schema");
Object.defineProperty(exports, "companyQuerySchema", { enumerable: true, get: function () { return query_schema_2.companyQuerySchema; } });
const mutation_schema_1 = require("./schema/transactions/mutation-schema");
Object.defineProperty(exports, "filesMutationSchema", { enumerable: true, get: function () { return mutation_schema_1.filesMutationSchema; } });
Object.defineProperty(exports, "transactionMutationSchema", { enumerable: true, get: function () { return mutation_schema_1.transactionMutationSchema; } });
const query_schema_3 = require("./schema/users/query-schema");
Object.defineProperty(exports, "userInfoQuerySchema", { enumerable: true, get: function () { return query_schema_3.userInfoQuerySchema; } });
const dashboard_data_1 = require("./schema/dashboard/dashboard-data");
Object.defineProperty(exports, "dashboardData", { enumerable: true, get: function () { return dashboard_data_1.dashboardData; } });
const query_schema_4 = require("./schema/ticketing/query-schema");
Object.defineProperty(exports, "ticketingTableSchema", { enumerable: true, get: function () { return query_schema_4.ticketingTableSchema; } });
Object.defineProperty(exports, "ticketFullDetailsSchema", { enumerable: true, get: function () { return query_schema_4.ticketFullDetailsSchema; } });
const mutation_schema_2 = require("./schema/ticketing/mutation-schema");
Object.defineProperty(exports, "ticketingMutationSchema", { enumerable: true, get: function () { return mutation_schema_2.ticketingMutationSchema; } });
Object.defineProperty(exports, "ticketEditSchema", { enumerable: true, get: function () { return mutation_schema_2.ticketEditSchema; } });
const contract = (0, core_1.initContract)();
exports.ticketContract = contract.router({
    getTickets: {
        method: "GET",
        path: "/tickets",
        query: query_schema_4.ticketingTableSchema,
        responses: {
            200: zod_1.z.array(query_schema_4.ticketingTableSchema),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    createTickets: {
        method: "POST",
        path: "/tickets/create",
        body: mutation_schema_2.ticketingMutationSchema,
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
        path: "/tickets/edit/:ticketId",
        body: mutation_schema_2.ticketEditSchema,
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
exports.awsContract = contract.router({
    getSignedUrl: {
        method: "GET",
        path: "/aws/getSignedUrl",
        query: zod_1.z.object({
            company: zod_1.z.string(),
            fileName: zod_1.z.string(),
            fileType: zod_1.z.string(),
        }),
        responses: {
            200: zod_1.z.object({
                company: zod_1.z.string(),
                fileName: zod_1.z.string(),
                fileType: zod_1.z.string(),
                fileUrl: zod_1.z.string(),
                signedUrl: zod_1.z.string(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    uploadDocument: {
        method: "POST",
        path: "/posts",
        contentType: "multipart/form-data", // <- Only difference
        body: contract.type(), // <- Use File type in here
        responses: {
            200: zod_1.z.object({
                key: zod_1.z.string(),
            }),
            400: zod_1.z.object({
                message: zod_1.z.string(),
            }),
        },
    },
});
exports.userAccountsContract = contract.router({
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
            id: zod_1.z.string(),
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
            id: zod_1.z.string(),
        }),
        body: company_schema_1.companyFormData,
        responses: {
            201: company_schema_1.companyFormData,
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
});
exports.transactionContract = contract.router({
    archivedTransation: {
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
    fetchTransactions: {
        method: "GET",
        path: "/transactions/search",
        query: zod_1.z.object({
            query: zod_1.z.string(),
            status: zod_1.z.string().optional(),
            page: zod_1.z.string(),
            pageSize: zod_1.z.string(),
            userId: zod_1.z.string().optional(),
        }),
        responses: {
            201: zod_1.z.object({
                data: zod_1.z.array(query_schema_1.transactionQueryData),
                numOfTransactions: zod_1.z.number(),
                totalPages: zod_1.z.number(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
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
            200: zod_1.z.object({
                success: zod_1.z.string(),
            }),
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
});
const contracts = contract.router({
    company: exports.companyContract,
    transaction: exports.transactionContract,
    userAccounts: exports.userAccountsContract,
    awsContract: exports.awsContract,
    dashboardContract: exports.dashboardContract,
    ticketing: exports.ticketContract,
});
exports.contracts = contracts;
