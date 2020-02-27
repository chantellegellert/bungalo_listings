import { IListingApiResult } from "./interfaces";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

function axioRequest(key: string, request: AxiosRequestConfig) {
  return axios(request).then(res => {
    return res.data;
  });
}

function getListingsRequest(city: string): AxiosRequestConfig {
  return {
    method: "get",
    url: `https://stage-fieldstone.bungalow.com/api/v1/listings/properties/?market__slug=${city}`
  };
}

export function getListings(city: string): Promise<IListingApiResult> {
  return axioRequest(city, getListingsRequest(city))
    .then(data => {
      return data;
    });
}
