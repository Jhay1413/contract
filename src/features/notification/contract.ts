import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { notification } from "./query-schema";

const contract = initContract();
export const notificationContract = contract.router({
  readNotif: {
    method: "PUT",
    path: "/notification/:id/read",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({
      dateRead: z.string().datetime(),
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
  getNotificationsByUserId: {
    method: "GET",
    path: "/notification/userNotif",
    query: z.object({
      id: z.string(),
    }),
    responses: {
      200: z.array(notification),
      500: z.object({
        error: z.string(),
      }),
    },
  },
});
