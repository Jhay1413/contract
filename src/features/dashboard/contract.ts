import { initContract } from "@ts-rest/core";
import { dashboardData } from "./dashboard-data";
import { z } from "zod";

const contract = initContract();
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
