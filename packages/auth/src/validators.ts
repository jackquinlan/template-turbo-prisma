import { z } from "zod";

export const signInWithCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

export const signUpWithCredentialsSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});
