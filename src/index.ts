import { initContract } from "@ts-rest/core";

import { z } from "zod";
import { companyFormData } from "./schema/company-schema";
import {
  completeStaffWorkQuerySchema,
  filesQuerySchema,
  transactionLogsData,
  transactionQueryData,
  transactionTable,
} from "./schema/transactions/query-schema";
import { companyQuerySchema } from "./schema/companies/query-schema";
import {
  completeStaffWorkMutationSchema,
  filesMutationSchema,
  transactionMutationSchema,
} from "./schema/transactions/mutation-schema";
import { userInfoQuerySchema } from "./schema/users/query-schema";
import { dashboardData } from "./schema/dashboard/dashboard-data";
import {
  ticketingTableSchema,
  ticketFullDetailsSchema,
} from "./schema/ticketing/query-schema";
import {
  ticketingMutationSchema,
  ticketEditSchema,
} from "./schema/ticketing/mutation-schema";
const contract = initContract();

export const ticketContract = contract.router({
  getTickets: {
    method: "GET",
    path: "/tickets",
    query: ticketingTableSchema,
    responses: {
      200: z.array(ticketingTableSchema),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  createTickets: {
    method: "POST",
    path: "/tickets/create",
    body: ticketingMutationSchema,
    responses: {
      200: z.object({
        message: z.string(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  editTickets: {
    method: "PUT",
    path: "/tickets/edit/:ticketId",
    body: ticketEditSchema,
    responses: {
      200: z.object({
        message: z.string(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
});

export const dashboardContract = contract.router({
  getDashboardData: {
    method: "GET",
    path: "/dashboard/data",
    responses: {
      200: dashboardData,
      500: z.object({
        error: z.string(),
      }),
    },
  },
});
export const awsContract = contract.router({
  getSignedUrl: {
    method: "GET",
    path: "/aws/getSignedUrl",
    query: z.object({
      company: z.string(),
      fileName: z.string(),
      fileType: z.string(),
    }),
    responses: {
      200: z.object({
        company: z.string(),
        fileName: z.string(),
        fileType: z.string(),
        fileUrl: z.string(),
        signedUrl: z.string(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  uploadDocument: {
    method: "POST",
    path: "/posts",
    contentType: "multipart/form-data", // <- Only difference
    body: contract.type<{
      document: File;
      company: string;
      fileName: string;
      contentType: string;
    }>(), // <- Use File type in here
    responses: {
      200: z.object({
        key: z.string(),
      }),
      400: z.object({
        message: z.string(),
      }),
    },
  },
});
export const userAccountsContract = contract.router({
  getUserInfoForSelect: {
    method: "GET",
    path: "/user/user-info",
    query: z.object({
      query: z.string(),
    }),
    responses: {
      200: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      ),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  getUserByRoleAccess: {
    method: "GET",
    path: "/user/user-by-roles",
    query: z.object({
      id: z.string(),
      targetDivision: z.string(),
      team: z.nullable(z.string()),
    }),
    responses: {
      200: z.array(
        z.object({
          accountId: z.string(),
          firstName: z.string(),
          lastName: z.string(),
          account: z.object({
            accountRole: z.enum([
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
        })
      ),
      500: z.object({
        error: z.string(),
      }),
    },
  },
});
export const companyContract = contract.router({
  insertCompany: {
    method: "POST",
    path: "/companies",

    responses: {
      201: companyFormData,
      500: z.object({
        error: z.string(),
      }),
    },
    body: companyFormData,
  },
  fetchCompanies: {
    method: "GET",
    path: "/companies",
    responses: {
      200: z.array(companyFormData).nullable(),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  fetchCompany: {
    method: "GET",
    path: "/company/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      200: companyFormData.nullable(),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  deleteCompanyById: {
    method: "DELETE",
    path: "/company/",
    body: z.object({
      id: z.string(),
    }),
    responses: {
      200: z.object({
        id: z.string(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  editCompanyById: {
    method: "PUT",
    path: "/company/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: companyFormData,
    responses: {
      201: companyFormData,
      500: z.object({
        error: z.string(),
      }),
    },
  },
});

export const transactionContract = contract.router({
  archivedTransation: {
    method: "PUT",
    path: "/transactions/archived/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({
      userId: z.string(),
    }),
    responses: {
      200: z.object({
        message: z.string(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  fetchTransactionsV2: {
    method: "GET",
    path: "/transactions/list",
    query: z.object({
      query: z.string(),
      status: z.string().optional(),
      page: z.string(),
      pageSize: z.string(),
      userId: z.string().optional(),
    }),
    responses: {
      201: z.object({
        data: z.array(transactionTable),
        numOfTransactions: z.number(),
        totalPages: z.number(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  fetchTransactions: {
    method: "GET",
    path: "/transactions/search",
    query: z.object({
      query: z.string(),
      status: z.string().optional(),
      page: z.string(),
      pageSize: z.string(),
      userId: z.string().optional(),
    }),
    responses: {
      201: z.object({
        data: z.array(transactionQueryData),
        numOfTransactions: z.number(),
        totalPages: z.number(),
      }),
      500: z.object({
        error: z.string(),
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
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      200: transactionQueryData.nullable(),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  updateTransaction: {
    method: "PUT",
    path: "/transactions/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: transactionMutationSchema,
    responses: {
      200: z.object({
        success: z.string(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  insertTransacitons: {
    method: "POST",
    path: "/transactions",
    body: transactionMutationSchema,
    responses: {
      201: z.array(transactionQueryData),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  receivedTransaction: {
    method: "PUT",
    path: "/transactions/received/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({
      dateReceived: z.string().datetime(),
    }),
    responses: {
      201: transactionTable,
      500: z.object({
        error: z.string(),
      }),
    },
  },
  getTransactionByParams: {
    method: "GET",
    path: "/transactions/",
    query: z.object({
      status: z.string(),
      accountId: z.string(),
    }),
    responses: {
      200: z.array(transactionQueryData),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  addCompleteStaffWork: {
    method: "PUT",
    path: "/transactions/addCsw/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: completeStaffWorkMutationSchema,
    responses: {
      201: transactionQueryData,
      500: z.object({
        error: z.string(),
      }),
    },
  },
});

const contracts = contract.router({
  company: companyContract,
  transaction: transactionContract,
  userAccounts: userAccountsContract,
  awsContract: awsContract,
  dashboardContract: dashboardContract,
  ticketing: ticketContract,
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
};
