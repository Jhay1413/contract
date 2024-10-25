


import { z } from "zod";
export const contactQuerySchema = z.object({
  id:z.optional(z.string()),
  name: z.string(),
  contactNumber: z.string(),
  email : z.nullable(z.string())
  
});

export const projectQuerySchema = z.object({
  id:z.optional(z.string()),
  projectId : z.string(),
  projectName: z.string(),
  projectAddress: z.string(),
  retainer:z.boolean(),
  date_expiry : z.nullable(z.date()),
  contactPersons: z.nullable(contactQuerySchema).optional(),
  email : z.nullable(z.string())
});
export const companyQuerySchema = z.object({
  id:z.optional(z.string()),
  companyId: z.string(),
  companyName: z.string(),
  companyAddress: z.string(),
  email : z.nullable(z.string()),
  companyProjects: z.nullable(z.array(projectQuerySchema)).optional(),
  contactPersons: z.nullable(contactQuerySchema).optional(),
});

