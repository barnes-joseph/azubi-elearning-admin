"use client";

import React from "react";
import { DefaultValues, Path, Resolver, useForm } from "react-hook-form";
import { z, ZodObject, ZodRawShape } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface UserFormField<T extends ZodObject<ZodRawShape>> {
    name: keyof z.infer<T>;
    label: string;
    type:
      | "text"
      | "email"
      | "password"
      | "select"
      | "checkbox"
      | "radio"
      | "textarea"
      | "number"
      | "file";
}

interface TmpFormProps<T extends ZodObject<ZodRawShape>> {
  formSchema: T;
  onSubmit: (data: z.infer<T>) => void;
  defaultValues?: Partial<z.infer<T>>;
  form: Array<UserFormField<T>>;
  submitLabel?: string
}

export function TmpForm<T extends ZodObject<ZodRawShape>>({
  defaultValues,
  formSchema,
  form,
  submitLabel = 'Submit',
  onSubmit,
}: TmpFormProps<T>) {
  const internalForm = useForm<z.infer<T>>({
    resolver: zodResolver(formSchema) as Resolver<z.infer<T>>,
    defaultValues: defaultValues as DefaultValues<z.infer<T>> | undefined,
  });

  function safeInputValue(value: unknown): string | number {
  if (typeof value === 'string' || typeof value === 'number') return value;
  return '';
}


  return (
    <Form {...internalForm}>
      <form
        onSubmit={internalForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-full"
      >
        {form.map((formField) => {
          return (
            <FormField
              key={formField.name as string}
              control={internalForm.control}
              name={formField.name as Path<z.infer<T>>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{formField.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={formField.label}
                      {...field}
                      value={
                        safeInputValue(field.value)
                      }
                      className="w-full"
                      type={formField.type}
                    />
                  </FormControl>
                  <FormMessage className="mt-[-10px]" />
                </FormItem>
              )}
            />
          );
        })}

        <Button className="mt-5 cursor-pointer" type="submit">{submitLabel}</Button>
      </form>
    </Form>
  );
}
