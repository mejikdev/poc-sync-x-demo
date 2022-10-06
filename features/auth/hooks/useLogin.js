import { useForm } from "react-hook-form";
import * as React from "react";
import { setCookie } from "../../../utils/cookie";
import { useRouter } from "next/router";
import { useLoginMutation } from "../../../api/features/auth/hooks/useLogin";

export const useLogin = () => {
  const methods = useForm();
  const router = useRouter();

  const { mutateAsync, isLoading } = useLoginMutation();

  const handleLogin = React.useCallback(
    async (data) => {
      try {
        const result = await mutateAsync(data);

        console.log(result);
        setCookie("token", result.token);
        router.replace("/agent");
      } catch (error) {
        console.log(error);
      }
    },
    [mutateAsync, router]
  );

  const inputs = [
    {
      name: "email",
      label: "Email",
      placeholder: "Your email adress",
      autoFocus: true,
      type: "email",
      validation: {
        required: {
          value: true,
          message: "Email is required!",
        },
      },
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Your password adress",
      type: "password",
      validation: {
        required: {
          value: true,
          message: "Password is required!",
        },
      },
    },
  ];

  return {
    inputs,
    isLoading,
    methods,
    handleLogin,
  };
};
