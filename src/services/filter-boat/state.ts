"use client";

import { toast } from "@/components/ui/use-toast";
import { RootState } from "@/lib/store";
import { objectToParams } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { create } from "./http";

export const useFiltersBoatActions = () => {
  const state = useSelector((state: RootState) => state.boatFilter);
  const queryParams = objectToParams(state);
  const router = useRouter();

  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ["boats-list", state],
    queryFn: () => create("/api/boats", state),
    enabled: false, // Prevent automatic query on mount
  });

  const handleOnSubmit = () => {
    // Refetch the data when handleOnSubmit is called
    // refetch
    if (state.departure && state.arrival !== "") {
      refetch();
      if (error === null) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Terjadi kesalahan saat mencari kapal. Coba lagi nanti.",
        });
      } else {
        router.push(`/available-boat?${queryParams}`);
      }
    } else {
      toast({
        variant: "default",
        title: "Pilih Destinasi dulu Yuk!!",
        description: "Mau pergi kemana? Pilih destinasimu sebelum cari kapal",
      });
    }
  };

  const handleSubmit = () => {
    // Refetch the data when handleOnSubmit is called
    // refetch
    const url = `/available-boat?${queryParams}`;
    router.push(url);
  };
  return {
    handleOnSubmit,
    handleSubmit,
    data,
    isLoading,
    // error,
  };
};
