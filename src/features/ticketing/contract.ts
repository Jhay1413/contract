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
      page: z.string(),
      pageSize: z.string(),
    }),
    responses: {
      200: z.array(ticketingTableSchema),
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
  getTicketsForUserByStatus: {
    method: "GET",
    path: "/tickets/:id/list",
    pathParams: z.object({
      id: z.string(),
    }),
    query: z.object({
      query: z.string(),
      status: z.string(),
      page: z.string(),
      pageSize: z.string(),
    }),
    responses: {
      200: z.array(ticketingTableSchema),
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
        message: z.string()
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
  }
});
