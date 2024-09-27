import { initContract } from "@ts-rest/core";

import { z } from "zod";
import { companyFormData } from "./schema/company-schema";
import { filesQuerySchema, transactionLogsData, transactionQueryData } from "./schema/transactions/query-schema";
import { companyQuerySchema } from "./schema/companies/query-schema";
import { filesMutationSchema, transactionMutationSchema } from "./schema/transactions/mutation-schema";

const contract = initContract();



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
    body:z.object({
        id:z.string()
    }),
    responses: {
      200: z.object({
        id:z.string(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
   editCompanyById:{
       method:"PUT",
       path:"/company/:id",
       pathParams:z.object({
        id:z.string()
       }),
       body:companyFormData,
       responses:{
           201:companyFormData,
           500: z.object({
            error: z.string(),
          }),
       }
   }
});

export const transactionContract = contract.router({
  searchTransactions:{
    method :"GET",
    path:"/transactions/search",
    query: z.object({
      query: z.string(),
      status:z.string().optional(),
      page:z.string(),
      pageSize:z.string(),
    }),
    responses:{
      201:z.array(transactionQueryData).nullable(),
      500: z.object({
        error: z.string(),
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
  fetchTransactionById :{
    method: "GET",
    path:"/transactions/:id",
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
  updateTransaction:{
    method:"PUT",
    path:"/transactions/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body:transactionMutationSchema,
    responses: {
      200: transactionQueryData.nullable(),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  insertTransacitons :{
    method:"POST",
    path:"/transactions",
    body:transactionMutationSchema,
    responses:{
      201: z.array(transactionQueryData),
      500: z.object({
        error: z.string(),
      }),
    }
  },
  
})


const contracts = contract.router({
  company: companyContract,
  transaction: transactionContract
})
export {
  transactionQueryData,
  companyQuerySchema,
  transactionMutationSchema,
  transactionLogsData,
  contracts,
  filesQuerySchema,
  filesMutationSchema
}