import { useForm } from "react-hook-form";

export function useFormEngine() {
  return useForm({
    mode: "onChange",
    defaultValues: {},
  });
}