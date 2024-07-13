"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthLoginSchema, AuthSchema } from "./validation";
import { useMutation } from "@tanstack/react-query";
import { create } from "./http";
import { useRouter } from "next/navigation";

function mutationRegisterLogin(path: string) {
  return useMutation({
    mutationFn: async (val: any) => {
      const res = await create(path, val);
      return res;
    },
  });
}

export const useFormInputRegisterActions = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof AuthSchema>>({
    resolver: zodResolver(AuthSchema),
  });
  const { mutate, isPending } = mutationRegisterLogin("/sign-in");
  const handleOnSubmit = (val: z.infer<typeof AuthSchema>) => {
    mutate(val, {
      onSuccess: (res) => {
        router.push("/log-in");
      },
      onError: (err) => {
        form.reset();
      },
    });
  };

  return {
    form,
    handleOnSubmit,
    isPending,
  };
};

type EmailPasswordType = Pick<z.infer<typeof AuthSchema>, "email" | "password">;

export const useFormInputLoginActions = () => {
  const router = useRouter();
  const form = useForm<EmailPasswordType>({
    resolver: zodResolver(AuthLoginSchema),
  });
  const { mutate, isPending } = mutationRegisterLogin("/register");
  const handleOnSubmit = (val: EmailPasswordType) => {
    mutate(val, {
      onSuccess: (res) => {
        router.push("/log-in");
      },
      onError: (err) => {
        form.reset();
      },
    });
  };

  return {
    form,
    handleOnSubmit,
    isPending,
  };
};
