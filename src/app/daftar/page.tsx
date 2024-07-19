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

interface IRegisterPageProps {}

const RegisterPage: React.FunctionComponent<IRegisterPageProps> = (props) => {
  const { form, handleOnSubmit, isPending } = useFormInputRegisterActions();
  const [isChecked, isSetIsChecked] = React.useState<boolean>(false);
  return (
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
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-2">
              <Input
                form={form}
                type="text"
                name="firstName"
                placeholder="Nama Depan"
                className="py-4 px-6 sm:px-3 bg-gray-400/50 rounded-2xl focus:outline-none"
              />
              <Input
                form={form}
                type="text"
                name="lastName"
                placeholder="Nama Depan"
                className="py-4 px-6 sm:px-3 bg-gray-400/50 rounded-2xl focus:outline-none"
              />
            </div>
            <Input
              form={form}
              type="email"
              name="email"
              placeholder="Email"
              className="py-4 px-6 sm:px-3 bg-gray-400/50 rounded-2xl focus:outline-none"
            />
            <Input
              form={form}
              type="password"
              name="password"
              placeholder="Password"
              className="py-4 px-6 sm:px-3 bg-gray-400/50 rounded-2xl focus:outline-none"
            />
            <Input
              form={form}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="py-4 px-6 sm:px-3 bg-gray-400/50 rounded-2xl focus:outline-none"
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
                <span className="text-[#175399]">Ketentuan</span> yang Berlaku
              </label>
            </div>
            <Button
              className={cn(["py-6 bg-[#175399] rounded-[15px] w-full"])}
              disabled={!isChecked}
            >
              Buat Akun
            </Button>
          </form>
        </Form>
      </Authorization.FormInput>
    </Authorization>
  );
};

export default RegisterPage;
