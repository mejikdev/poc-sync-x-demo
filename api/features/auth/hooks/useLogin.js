import { useMutation, useQueryClient } from "@tanstack/react-query";
import { microgen } from "../../../../lib/microgen";

export const login = (body) => microgen.auth.login(body).then((res) => res);

export const useLoginMutation = (options) => {
  const queryClient = useQueryClient();

  const mutationOptions = {
    mutationKey: ["login"],
    onSettled: () => {
      queryClient.invalidateQueries(["user"]);
    },
    ...options,
  };

  return useMutation(
    ["login"],
    (variables) => login(variables),
    mutationOptions
  );
};
