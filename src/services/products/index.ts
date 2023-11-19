import { Product } from "../../models/product";
import ApiClient from "../../services/api-client";

const api = new ApiClient();

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>('/products/products');
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
      }
      throw new Error('Failed to fetch data: Unknown error occurred');
  }
};