import poliServices from "@/services/poli.service";
import { IUpdatePoli } from "@/types/poli";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const updatePoliSchema = z.object({
  namaPoli: z.string().min(1, "Nama Poli wajib diisi"),
});

export type UpdatePoliValues = z.infer<typeof updatePoliSchema>;

interface PropsTypes {
  id: number;
}

const useDetailPoli = ({ id }: PropsTypes) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdatePoliValues>({
    resolver: zodResolver(updatePoliSchema),
    defaultValues: {
      namaPoli: "",
    },
  });

  const getPoli = async () => {
    const { data } = await poliServices.getById(id);
    return data.data;
  };

  const { data: dataPoli, isLoading: isLoadingPoli } = useQuery({
    queryKey: ["poli", id],
    queryFn: getPoli,
    enabled: !!id,
  });

  const updatePoli = async (payload: IUpdatePoli) => {
    const { data } = await poliServices.update(id, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdatePoli,
    isPending: isPendingMutateUpdatePoli,
    isSuccess: isSuccessMutateUpdatePoli,
  } = useMutation({
    mutationFn: (payload: IUpdatePoli) => updatePoli(payload),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      // console.log("success PAYLOAD :", payload);
      toast.success("Success Update Poli");
    },
  });

  // console.log(dataPoli);

  const handleUpdatePoli = (data: IUpdatePoli) => {
    // console.log("SUBMIT DATA Poli:", data);
    mutateUpdatePoli(data);
  };

  return {
    // form
    control,
    handleSubmit,
    errors,
    reset,

    // Poli
    dataPoli,
    isLoadingPoli,

    // update
    handleUpdatePoli,
    isPendingMutateUpdatePoli,
    isSuccessMutateUpdatePoli,
  };
};

export default useDetailPoli;
