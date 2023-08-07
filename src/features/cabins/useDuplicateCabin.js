import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin as duplicateCabinApi } from "../../services/apiCabins";

export function useDuplicateCabin() {
  const queryClient = useQueryClient();
  const { mutate: duplicateCabin, isLoading: isDuplicating } = useMutation({
    mutationFn: duplicateCabinApi,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDuplicating, duplicateCabin };
}
