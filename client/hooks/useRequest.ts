import axios, { AxiosResponse, Method } from "axios";
import { useState } from "react";

interface useRequestProps<RequestData, RequestParams> {
  url: string;
  method: Method;
  body?: RequestParams;
  onSuccess: (data: RequestData) => void;
}

export const useRequest = <RequestData, RequestParams>({
  url,
  method,
  body,
  onSuccess,
}: useRequestProps<RequestData, RequestParams>) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response: AxiosResponse<RequestData> = await axios({
        method,
        url,
        data: { ...body, ...props },
      });

      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (err) {
      // TODO: add react hot toast
    }
  };

  return { doRequest, errors };
};
