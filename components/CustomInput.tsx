import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  id: string; // Add this line
  autocomplete?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  control,
  name,
  label,
  placeholder,
  id, // Add this line
  autocomplete,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              id={id} // Add this line
              autoComplete={autocomplete}
              className="input-class"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
