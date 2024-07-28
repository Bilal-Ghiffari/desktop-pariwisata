import { cn } from "@/lib/utils";
import * as React from "react";

type IAuthorizationProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;
type AuthorizationTitleProps = Pick<
  React.ComponentPropsWithoutRef<"h3">,
  "className" | "children"
>;

type AuthorizationSubTitleProps = Pick<
  React.ComponentPropsWithoutRef<"span">,
  "className" | "children"
>;

type AuthorizationFormInputProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;

const AuthorizationParent: React.FunctionComponent<IAuthorizationProps> = ({
  children,
}) => {
  return (
    <div className="md:flex justify-center items-center md:mt-24">
      <div className="flex flex-col gap-y-5">{children}</div>
    </div>
  );
};

const AuthorizationTitle: React.FunctionComponent<AuthorizationTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h3 className={cn(["font-bold md:text-[40px] text-3xl", className])}>
      {children}
    </h3>
  );
};

const AuthorizationSubTitle: React.FunctionComponent<
  AuthorizationSubTitleProps
> = ({ children, className }) => {
  return (
    <span className={cn(["text-[16px] text-[#9693A5]", className])}>
      {children}
    </span>
  );
};

const AuthorizationFormInput: React.FunctionComponent<
  AuthorizationFormInputProps
> = ({ children, className }) => {
  return (
    <div
      className={cn([
        "flex flex-col gap-y-4 mb-10 mt-14 md:w-[544px] sm:max-sm:",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export const Authorization = Object.assign(AuthorizationParent, {
  Title: AuthorizationTitle,
  SubTitle: AuthorizationSubTitle,
  FormInput: AuthorizationFormInput,
});
