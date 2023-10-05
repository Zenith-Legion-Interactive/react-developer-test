import { AxiosError } from "axios";

interface HelpersHandler {
  className: (...params: string[]) => string;
  errorMessage: (error: unknown) => string;
}
const helpers: HelpersHandler = {
  className: (...className) => {
    return [...className]
      .filter((e) => e)
      .join(" ")
      .trim();
  },
  errorMessage: (error) => {
    if (error instanceof AxiosError) return error?.response?.data?.error;
    else if (error instanceof Error) return error?.message;
    return error;
  },
};

export default helpers;
