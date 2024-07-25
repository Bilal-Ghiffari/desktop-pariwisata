"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import * as React from "react";
import { Authorization } from "../components/layouts/auth";
import { Form } from "@/components/ui/form";
import Input from "../components/containers/input";
import { useFormInputLoginActions } from "@/services/auth/state";
import NavBar from "../components/containers/navbar";
import Footers from "../components/containers/footers";

interface ISignInPageProps {}

const SignInPage: React.FunctionComponent<ISignInPageProps> = (props) => {
  const { form, handleOnSubmit, isPending } = useFormInputLoginActions();
  return (
    <>
      <div className="container mx-auto h-screen">
        <NavBar />
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
                className="space-y-7"
              >
                <Input
                  form={form}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="py-4 px-6 border rounded-full focus:outline-none placeholder:text-lg"
                />
                <Input
                  form={form}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="py-4 px-6 border rounded-full focus:outline-none placeholder:text-lg"
                />
                <Button className="py-7 bg-[#175399] hover:bg-[#356499] font-bold shadow-lg rounded-full text-lg w-full">
                  Buat Akun
                </Button>
              </form>
            </Form>
          </Authorization.FormInput>
        </Authorization>
      </div>
      <div className="mb-auto">
        <Footers />
      </div>
    </>
  );
};

export default SignInPage;
