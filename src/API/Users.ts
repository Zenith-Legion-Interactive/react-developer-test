import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const http = axios.create({
    headers: {
        "app-id": "65080fec01538513690ca63e",
    },
});

export function getUsers(requestOptions?: AxiosRequestConfig): Promise<AxiosResponse> {
    return http.get("https://dummyapi.io/data/v1/user", {
        ...requestOptions,
    });
}

export function getUser(id: string, requestOptions?: AxiosRequestConfig): Promise<AxiosResponse> {
    return http.get(`https://dummyapi.io/data/v1/user/${id}`, {
        ...requestOptions,
    });
}
