import * as z from "zod"

export const loginSchema = {
    email: z
    .string()
    .email("Please enter valid email address"),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" })
}