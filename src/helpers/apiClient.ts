
// export const SERVER_BASE_URL = "http://127.0.0.1:1970"

import { getServerUrl } from "./functions";

// export const SERVER_BASE_URL = "http://localhost:50000";
export const SERVER_BASE_URL : string = getServerUrl()
export interface IServerResponse {
  status: number;
  data?: any;
  error?: any;
}

export interface IConfig {
  method: string;
  body: string;
  headers?: IHeaders;
}

export interface IHeaders {
  authorization?: string | undefined;
  Accept: string;
  "Content-Type": string;
}

export async function request<T>(
  url: string,
  route: string,
  config?: any
): Promise<T> {
  const myUrl: string = `${url}${route}`;
  const response = await fetch(myUrl, config);
  return (await response.json()) as T;
}

export const apiClient = {
  /**
   * Effectue un GET vers le serveur et renvoi la réponse en Json
   * {status:number; data?:any; error?: any}
   * @param url   optional
   * @param route obligatoire
   * @returns IServerResponse
   */
  get: (url: string, route: string) =>
    request<IServerResponse>(url, route, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),

  /**
   * Effectue un POST vers le serveur et renvoi la réponse en Json
   * {status:number; data?:any; error?: any}
   * @param route :string
   * @param payload : object
   * @returns IServerResponses
   */
  post: (url: string, route: string, payload: any) =>
    request<IServerResponse>(url, route, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
};

