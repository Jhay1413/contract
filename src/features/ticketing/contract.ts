import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { ticketFullDetailsSchema, ticketingTableSchema } from "./query-schema";
import { ticketEditSchema, ticketingMutationSchema } from "./mutation-schema";

const contract = initContract();
export const ticketContract = contract.router({
  getTickets: {
    method: "GET",
    path: "/tickets",
    query: z.object({
      query: z.string(),
      priority: z.string().optional(),
      status: z.string().optional(),
      page: z.string(),
      pageSize: z.string(),
      userId: z.string().optional(),
      sortOrder: z.string(),
      projectId: z.string().optional(),
      transactionId: z.string().optional(),
      senderId: z.string().optional(),
    }),
    responses: {
      200: z.object({
        data: z.array(ticketingTableSchema),
        numOfTickets: z.number(),
        totalPages: z.number(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  getTicketsById: {
    method: "GET",
    path: "/tickets/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      200: ticketFullDetailsSchema,
      500: z.object({
        error: z.string(),
      }),
    },
  },
  createTickets: {
    method: "POST",
    path: "/tickets",
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
    path: "/tickets/:id",
    pathParams: z.object({
      id: z.string(),
    }),
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
  receiveTickets: {
    method: "PUT",
    path: "/tickets/:id/receive",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({
      dateReceived: z.string().datetime(),
    }),
    responses: {
      201: z.object({
        message: z.string(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  forwardTickets: {
    method: "PUT",
    path: "/tickets/:id/forward",
    pathParams: z.object({
      id: z.string(),
    }),
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
  resolveTickets: {
    method: "PUT",
    path: "/tickets/:id/resolve",
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
  reopenTickets: {
    method: "PUT",
    path: "/tickets/:id/reopen",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({
      requestee: z.string(),
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
});
