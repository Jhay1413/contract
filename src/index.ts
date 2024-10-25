import { initContract } from "@ts-rest/core";

import { z } from "zod";
import { companyFormData } from "./features/company-schema";
import {
  completeStaffWorkQuerySchema,
  filesQuerySchema,
  transactionLogsData,
  transactionQueryData,
  transactionTable,
} from "./features/transactions/query-schema";
import { companyQuerySchema } from "./features/companies/query-schema";
import {
  completeStaffWorkMutationSchema,
  filesMutationSchema,
  transactionMutationSchema,
} from "./features/transactions/mutation-schema";
import { userInfoQuerySchema } from "./features/users/query-schema";
import { dashboardData } from "./features/dashboard/dashboard-data";
import {
  ticketingTableSchema,
  ticketFullDetailsSchema,
  ticketLogsSchema,
} from "./features/ticketing/query-schema";
import {
  ticketingMutationSchema,
  ticketEditSchema,
} from "./features/ticketing/mutation-schema";
import { notification } from "./features/notification/query-schema";
import { getViewSignedUrlsSchema } from "./features/aws/query-schema";
import { awsContract } from "./features/aws/contract";
import { transactionContract } from "./features/transactions/contract";
import { companyContract } from "./features/companies/contract";
import { userAccountsContract } from "./features/users/contract";
import { dashboardContract } from "./features/dashboard/contract";
import { ticketContract } from "./features/ticketing/contract";
import { notificationContract } from "./features/notification/contract";
const contract = initContract();

const contracts = contract.router({
  company: companyContract,
  transaction: transactionContract,
  userAccounts: userAccountsContract,
  awsContract: awsContract,
  dashboardContract: dashboardContract,
  ticketing: ticketContract,
  notificationContract: notificationContract,
});
export {
  companyFormData,
  transactionQueryData,
  companyQuerySchema,
  transactionMutationSchema,
  transactionLogsData,
  contracts,
  filesQuerySchema,
  filesMutationSchema,
  userInfoQuerySchema,
  transactionTable,
  dashboardData,
  ticketingMutationSchema,
  ticketingTableSchema,
  ticketEditSchema,
  ticketFullDetailsSchema,
  ticketLogsSchema,
  notification,
  getViewSignedUrlsSchema,
  completeStaffWorkQuerySchema,
};
