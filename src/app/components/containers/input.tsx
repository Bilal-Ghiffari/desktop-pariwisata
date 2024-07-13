import * as React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input as IInput } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface IInputProps {
  form: UseFormReturn<any>;
  label?: string;
  placeholder: string;
  name: string;
  className?: string;
  type: string;
}

const Input: React.FunctionComponent<IInputProps> = ({
  form,
  label,
  placeholder,
  name,
  type,
  className,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <IInput
              type={type}
              placeholder={placeholder}
              {...field}
              className={className}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Input;
