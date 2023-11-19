import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T;
}

class ApiClient {
  private axiosInstance: AxiosInstance;

  
  // TODO: BaseURL to be supplied from .env config file instead of hardcoding as default param value but omitting that step for the sake of this assignment in order to save time
  constructor(baseURL: string = 'https://my-json-server.typicode.com/benirvingplt') {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse
    );
  }

  private handleSuccessResponse<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    return response;
  }

  private handleErrorResponse(error: AxiosError): never {
    if (error.response) {
      // The request was made and the server responded with a status code
      throw new Error(`API request failed with status ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('API request made but no response received');
    } else {
      // Something happened in setting up the request that triggered an error
      throw new Error(`Error: ${error.message}`);
    }
  }

  public async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.get<T>(endpoint);
      return this.handleSuccessResponse<T>(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
      }
      throw new Error('Failed to fetch data: Unknown error occurred');
    }
  }

  // TODO: Implement other HTTP methods (post, put, delete) similarly
}

export default ApiClient;
