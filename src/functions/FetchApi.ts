import { useState } from "react";
import { TPostApiResponse } from "../types/public.types";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const BackEndURL = "http://localhost:3700";

export const UseApiPost = (): TPostApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(false);

  //method tha i want call it one time in useEffect
  const postAPIData = async (
    path: string,
    body: object = {},
    options: AxiosRequestConfig = {}
  ): Promise<void> => {
    setLoading(true);
    try {
      const axiosResponse = await axios.post(
        `${BackEndURL}${path}`,
        body,
        options
      );

      setStatus(axiosResponse.status || data.status);
      setStatusText(axiosResponse.statusText);
      setData(await axiosResponse.data);
    } catch (error: AxiosError | any) {
      // console.log(error.response);
      setError(error?.response?.data.status || 500);
      setError(error?.response?.data);
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
