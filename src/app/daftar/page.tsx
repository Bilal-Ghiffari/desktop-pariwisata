"use client";

import { Checkbox } from "@/components/ui/checkbox";
import * as React from "react";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Authorization } from "../components/layouts/auth";
import { useFormInputRegisterActions } from "@/services/auth/state";
import Input from "../components/containers/input";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import NavBar from "../components/containers/navbar";
import Footers from "../components/containers/footers";

interface IRegisterPageProps {}

const RegisterPage: React.FunctionComponent<IRegisterPageProps> = (props) => {
  const { form, handleOnSubmit, isPending } = useFormInputRegisterActions();
  const [isChecked, isSetIsChecked] = React.useState<boolean>(false);
  return (
    <>
      <div className="container mx-auto h-screen">
        <NavBar />
        <Authorization>
          <div>
            <Authorization.Title>Buat Akun</Authorization.Title>
            <Authorization.SubTitle>
              Sudah memiliki akun?{" "}
              <Link
                href="/log-in"
                className="text-[#175399] font-semibold underline"
              >
                Log in
              </Link>
            </Authorization.SubTitle>
          </div>
          <Authorization.FormInput>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleOnSubmit)}
                className="space-y-7"
              >
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    form={form}
                    type="text"
                    name="firstName"
                    placeholder="Nama Depan"
                    className="py-4 px-6 border rounded-full focus:outline-none placeholder:text-lg"
                  />
                  <Input
                    form={form}
                    type="text"
                    name="lastName"
                    placeholder="Nama Belakang"
                    className="py-4 px-6 border rounded-full focus:outline-none placeholder:text-lg"
                  />
                </div>
                <Input
                  form={form}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="py-4 px-6 border rounded-full focus:outline-none placeholder:text-lg"
                />
                <Input
                  form={form}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="py-4 px-6 border rounded-full focus:outline-none placeholder:text-lg"
                />
                <Input
                  form={form}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="py-4 px-6 border rounded-full focus:outline-none placeholder:text-lg"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={isChecked}
                    onCheckedChange={() => isSetIsChecked(!isChecked)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
                  >
                    Saya setuju dengan{" "}
                    <span className="text-[#175399]">Syarat</span> dan{" "}
                    <span className="text-[#175399]">Ketentuan</span> yang
                    Berlaku
                  </label>
                </div>
                <Button
                  className={
                    "py-7 bg-[#175399] hover:bg-[#356499] font-bold shadow-lg rounded-full text-lg w-full"
                  }
                  disabled={!isChecked}
                >
                  Buat Akun
                </Button>
              </form>
            </Form>
          </Authorization.FormInput>
        </Authorization>
      </div>
      <Footers className="mt-36" />
    </>
  );
};

export default RegisterPage;
