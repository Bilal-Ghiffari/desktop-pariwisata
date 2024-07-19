import axios from "axios";
import { z } from "zod";

const ApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const create = async (url: string, body: any) => {
  const { data } = await ApiClient.post(url, body);
  return data;
};
