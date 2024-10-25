"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeStaffWorkQuerySchema = exports.getViewSignedUrlsSchema = exports.notification = exports.ticketLogsSchema = exports.ticketFullDetailsSchema = exports.ticketEditSchema = exports.ticketingTableSchema = exports.ticketingMutationSchema = exports.dashboardData = exports.transactionTable = exports.userInfoQuerySchema = exports.filesMutationSchema = exports.filesQuerySchema = exports.contracts = exports.transactionLogsData = exports.transactionMutationSchema = exports.companyQuerySchema = exports.transactionQueryData = exports.companyFormData = void 0;
const core_1 = require("@ts-rest/core");
const company_schema_1 = require("./features/company-schema");
Object.defineProperty(exports, "companyFormData", { enumerable: true, get: function () { return company_schema_1.companyFormData; } });
const query_schema_1 = require("./features/transactions/query-schema");
Object.defineProperty(exports, "completeStaffWorkQuerySchema", { enumerable: true, get: function () { return query_schema_1.completeStaffWorkQuerySchema; } });
Object.defineProperty(exports, "filesQuerySchema", { enumerable: true, get: function () { return query_schema_1.filesQuerySchema; } });
Object.defineProperty(exports, "transactionLogsData", { enumerable: true, get: function () { return query_schema_1.transactionLogsData; } });
Object.defineProperty(exports, "transactionQueryData", { enumerable: true, get: function () { return query_schema_1.transactionQueryData; } });
Object.defineProperty(exports, "transactionTable", { enumerable: true, get: function () { return query_schema_1.transactionTable; } });
const query_schema_2 = require("./features/companies/query-schema");
Object.defineProperty(exports, "companyQuerySchema", { enumerable: true, get: function () { return query_schema_2.companyQuerySchema; } });
const mutation_schema_1 = require("./features/transactions/mutation-schema");
Object.defineProperty(exports, "filesMutationSchema", { enumerable: true, get: function () { return mutation_schema_1.filesMutationSchema; } });
Object.defineProperty(exports, "transactionMutationSchema", { enumerable: true, get: function () { return mutation_schema_1.transactionMutationSchema; } });
const query_schema_3 = require("./features/users/query-schema");
Object.defineProperty(exports, "userInfoQuerySchema", { enumerable: true, get: function () { return query_schema_3.userInfoQuerySchema; } });
const dashboard_data_1 = require("./features/dashboard/dashboard-data");
Object.defineProperty(exports, "dashboardData", { enumerable: true, get: function () { return dashboard_data_1.dashboardData; } });
const query_schema_4 = require("./features/ticketing/query-schema");
Object.defineProperty(exports, "ticketingTableSchema", { enumerable: true, get: function () { return query_schema_4.ticketingTableSchema; } });
Object.defineProperty(exports, "ticketFullDetailsSchema", { enumerable: true, get: function () { return query_schema_4.ticketFullDetailsSchema; } });
Object.defineProperty(exports, "ticketLogsSchema", { enumerable: true, get: function () { return query_schema_4.ticketLogsSchema; } });
const mutation_schema_2 = require("./features/ticketing/mutation-schema");
Object.defineProperty(exports, "ticketingMutationSchema", { enumerable: true, get: function () { return mutation_schema_2.ticketingMutationSchema; } });
Object.defineProperty(exports, "ticketEditSchema", { enumerable: true, get: function () { return mutation_schema_2.ticketEditSchema; } });
const query_schema_5 = require("./features/notification/query-schema");
Object.defineProperty(exports, "notification", { enumerable: true, get: function () { return query_schema_5.notification; } });
const query_schema_6 = require("./features/aws/query-schema");
Object.defineProperty(exports, "getViewSignedUrlsSchema", { enumerable: true, get: function () { return query_schema_6.getViewSignedUrlsSchema; } });
const contract_1 = require("./features/aws/contract");
const contract_2 = require("./features/transactions/contract");
const contract_3 = require("./features/companies/contract");
const contract_4 = require("./features/users/contract");
const contract_5 = require("./features/dashboard/contract");
const contract_6 = require("./features/ticketing/contract");
const contract_7 = require("./features/notification/contract");
const contract = (0, core_1.initContract)();
const contracts = contract.router({
    company: contract_3.companyContract,
    transaction: contract_2.transactionContract,
    userAccounts: contract_4.userAccountsContract,
    awsContract: contract_1.awsContract,
    dashboardContract: contract_5.dashboardContract,
    ticketing: contract_6.ticketContract,
    notificationContract: contract_7.notificationContract,
});
exports.contracts = contracts;
