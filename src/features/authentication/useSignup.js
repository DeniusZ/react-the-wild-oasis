import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";

import toast from "react-hot-toast";

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify a new user from user's email address"
      );
    },
  });

  return { signup, isLoading };
};
