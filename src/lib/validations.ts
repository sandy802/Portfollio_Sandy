import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(60, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select an estimated timeline"),
  message: z
    .string()
    .min(10, "Please provide a brief description (at least 10 characters)")
    .max(1500, "Message cannot exceed 1500 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
