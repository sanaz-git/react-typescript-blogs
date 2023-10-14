import { useEffect, useState } from "react";
import { TApiResponse } from "../types/public.types";

export const UseApiPost = (
  url: string,
  body: object = {},
  options: RequestInit = {}
): TApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOptions: RequestInit = !options
    ? { method: "POST", body: JSON.stringify(body) }
    : {
        ...options,
        method: "POST",
        body: JSON.stringify(body),
      };

  //method tha i want call it one time in useEffect
  const postAPIData = async (): Promise<void> => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url, fetchOptions);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    postAPIData();
  }, []);
  return {
    status,
    statusText,
    data,
    error,
    loading,
  };
};
