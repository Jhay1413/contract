import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { transactionQueryData, transactionTable } from "./query-schema";
import {
  completeStaffWorkMutationSchema,
  transactionMutationSchema,
} from "./mutation-schema";

const contract = initContract();
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
  searchTransactionById: {
    method: "GET",
    path: "/transactions/search",
    query: z.string(),
    responses: {
      200: z.object({
        id: z.string(),
        transactionId:  z.string(),
        transaction:
          z.object({
            documentSubType: z.string(),
          }),
      }),
      500:  z.object({
        error: z.string()
      })
    }
  },
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
