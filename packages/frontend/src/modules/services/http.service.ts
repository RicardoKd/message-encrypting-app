import axios, { AxiosResponse } from 'axios';

import { SERVER_URL, APP_KEYS } from '../common/consts';
import { IHTTPServiceConfig } from './IHTTPServiceConfig';

export class HttpService {
  constructor(
    protected serviceEndpoint = '',
    protected withAuth = true,
    private apiVersion = 'api',
    private baseUrl = SERVER_URL,
    protected fetchingService = axios
  ) {}

  protected getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  protected populateTokenToHeaderConfig() {
    return {
      authorization: `Bearer ${localStorage.getItem(APP_KEYS.STORAGE_KEYS.TOKEN)}`
    };
  }

  protected extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }: IHTTPServiceConfig) {
    return configWithoutDataAndUrl;
  }

  protected async handleResponse<T>(response: AxiosResponse<T>): Promise<T> {
    if (response.status !== 200) {
      const error = await response.statusText;

      throw new Error(error);
    }

    const data = await response.data;

    return data;
  }

  async get<T>({ headers, url }: IHTTPServiceConfig): Promise<T> {
    if (this.withAuth) {
      headers = {
        ...headers,
        ...this.populateTokenToHeaderConfig()
      };
    }

    const response = await this.fetchingService.get<T>(this.getFullApiUrl(url), { headers });

    return this.handleResponse<T>(response);
  }

  async post<T>({ headers, data, url }: IHTTPServiceConfig): Promise<T> {
    if (this.withAuth) {
      headers = {
        ...headers,
        ...this.populateTokenToHeaderConfig()
      };
    }

    const response = await this.fetchingService.post<T>(this.getFullApiUrl(url), data, { headers });

    return this.handleResponse<T>(response);
  }

  async put<T>({ headers, data, url }: IHTTPServiceConfig): Promise<T> {
    if (this.withAuth) {
      headers = {
        ...headers,
        ...this.populateTokenToHeaderConfig()
      };
    }

    const response = await this.fetchingService.put<T>(this.getFullApiUrl(url), data, { headers });

    return this.handleResponse<T>(response);
  }

  async delete<T>({ headers, data, url }: IHTTPServiceConfig): Promise<T> {
    if (this.withAuth) {
      headers = {
        ...headers,
        ...this.populateTokenToHeaderConfig()
      };
    }

    const response = await this.fetchingService.delete<T>(this.getFullApiUrl(url), {
      data,
      headers
    });

    return this.handleResponse<T>(response);
  }
}
