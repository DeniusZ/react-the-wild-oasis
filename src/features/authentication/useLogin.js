/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      navigate("/dashboard");
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Incorrect email or password");
    },
  });

  return { login, isLoading };
};
