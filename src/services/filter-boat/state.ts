"use client";

import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useRef, useState } from "react";
import { create } from "./http";
import { redirect } from "next/navigation";
import { objectToParams } from "@/utils";
import { useRouter } from "next/navigation";

export const useFiltersBoatActions = () => {
  const state = useSelector((state: RootState) => state.boatFilter);
  const queryParams = objectToParams(state);
  const router = useRouter();

  // const { data, isLoading, error, refetch } = useQuery({
  //   queryKey: ["boats-list", state],
  //   queryFn: () => create("/api/boats", state),
  //   enabled: false, // Prevent automatic query on mount
  // });

  // useEffect(() => {
  //   // Update the URL without adding a new entry to the history stack
  //   const url = `/available-boat?${queryParams}`;
  //   router.replace(url);
  // }, [state, queryParams, router]);

  const handleOnSubmit = () => {
    // Refetch the data when handleOnSubmit is called
    // refetch
    const url = `/available-boat?${queryParams}`;
    router.push(url);
  };

  const handleSubmit = () => {
    // Refetch the data when handleOnSubmit is called
    // refetch
    const url = `/available-boat?${queryParams}`;
    router.replace(url);
  };
  return {
    handleOnSubmit,
    handleSubmit,
    // data,
    // isLoading,
    // error,
  };
};
