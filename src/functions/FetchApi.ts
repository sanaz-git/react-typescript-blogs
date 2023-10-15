import { useState } from "react";
import { TApiResponse } from "../types/public.types";

const BackEndURL = "http://localhost:3700";

export const UseApiPost = (): TApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(false);

  //method tha i want call it one time in useEffect
  const postAPIData = async (
    path: string,
    body: object = {},
    options: RequestInit = {}
  ): Promise<void> => {
    setLoading(true);
    try {
      const fetchOptions: RequestInit = !options
        ? {
            method: "POST",
            headers: { content_type: "application/json" },
            body: JSON.stringify(body),
          }
        : {
            ...options,
            method: "POST",
            headers: { content_type: "application/json" },
            body: JSON.stringify(body),
          };
      await fetch(`${BackEndURL}${path}`, fetchOptions)
        .then(async (res) => {
          setStatus(res.status);
          setStatusText(res.statusText);
          setData(await res.json);
        })
        .catch((err) => setError(err));
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return {
    postAPIData,
    status,
    statusText,
    data,
    error,
    loading,
  };
};
