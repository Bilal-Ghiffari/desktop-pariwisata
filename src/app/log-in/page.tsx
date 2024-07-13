"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import * as React from "react";
import { Authorization } from "../components/layouts/auth";
import { Form } from "@/components/ui/form";
import Input from "../components/containers/input";
import { useFormInputLoginActions } from "@/services/auth/state";

interface ISignInPageProps {}

const SignInPage: React.FunctionComponent<ISignInPageProps> = (props) => {
  const { form, handleOnSubmit, isPending } = useFormInputLoginActions();
  return (
    <Authorization>
      <div>
        <Authorization.Title>Selamat datang!</Authorization.Title>
        <Authorization.SubTitle>
          Belum memiliki akun?{" "}
          <Link
            href="/daftar"
            className="text-[#175399] font-semibold underline"
          >
            Daftar
          </Link>
        </Authorization.SubTitle>
      </div>
      <Authorization.FormInput>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleOnSubmit)}
            className="space-y-5"
          >
            <Input
              form={form}
              name="email"
              type="email"
              placeholder="Email"
              className="py-4 px-6 bg-gray-400/50 rounded-2xl focus:outline-none"
            />
            <Input
              form={form}
              name="password"
              type="password"
              placeholder="Password"
              className="py-4 px-6 bg-gray-400/50 rounded-2xl focus:outline-none"
            />
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
              >
                Ingatkan Saya
              </label>
            </div>
            <Button className="py-6 bg-[#175399] rounded-[15px] w-full">
              Buat Akun
            </Button>
          </form>
        </Form>
      </Authorization.FormInput>
    </Authorization>
  );
};

export default SignInPage;
