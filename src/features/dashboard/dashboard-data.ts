import { z } from "zod";

const dashboardData = z.object({
  priority: z.array(
    z.object({
      id: z.string(),
      percentage: z.number(),
      project: z.object({
        projectName: z.string(),
      }),
      transactionId: z.string(),
    })
  ),
  perApplication: z.array(
    z.object({
      category: z.string(),
      count: z.number(),
    })
  ),
  perSection: z.array(
    z.object({
      section: z.string(),
      count: z.number(),
    })
  ),
  totalProject: z.number(),
});

export { dashboardData };
