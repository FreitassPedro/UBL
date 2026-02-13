"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z
  .object({
    name: z.string().trim().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
    email: z.email({ message: "Email inválido." }),
    password: z.string().trim().min(8, { message: "A senha deve ter pelo menos 8 caracteres." }),
    confirmPassword: z.string().trim().min(8, { message: "A confirmação de senha deve ter pelo menos 8 caracteres." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

export async function signUpAction(
  _prevState: { errorMessages: string[] },
  formData: FormData,
): Promise<{ errorMessages: string[] }> {
  const data = formSchema.safeParse(Object.fromEntries(formData));
  if (!data.success) {
    const messages: string[] = Array.from(
      new Set(data.error.issues.map((issue) => issue.message)),
    );

    return {
      errorMessages: messages.length > 0 ? messages : ["Dados inválidos."],
    };
  }

  const { name, email, password } = data.data;
  const existingUser: { id: string } | null = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (existingUser) {
    return { errorMessages: ["Já existe uma conta com esse e-mail."] };
  }

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
      headers: await headers(),
    });
  } catch {
    return {
      errorMessages: [
        "Ocorreu um erro inesperado ao criar sua conta. Tente novamente mais tarde.",
      ],
    };
  }

  redirect("/");
}
