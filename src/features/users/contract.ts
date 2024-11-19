import { initContract } from "@ts-rest/core";
import { z } from "zod";

const contract = initContract();
export const userAccountsContract = contract.router({
  getUsersForTickets: {
    method: "GET",
    path: "/user/forward-to",
    query: z.object({
      division: z.string(),
      section: z.string(),
      role: z.string(),
      mode: z.string(),
      requesteedId: z.string().optional(),
    }),
    responses: {
      200: z.array(
        z.object({
          id: z.string(),
          userInfo: z.object({
            firstName: z.string(),
            lastName: z.string(),
          }),
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
        })
      ),
      500: z.object({
        error: z.string(),
      }),
    },
  },
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
