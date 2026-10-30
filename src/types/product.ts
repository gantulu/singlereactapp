export interface ApiProduct {
  id: string;
  source_product_id: string;
  title: string;
  brand: string | null;
  price: number;
  sale_price: number | null;
  currency: string;
  description: string | null;
  sku: string | null;
  category: string | null;
  availability: string;
  stock_quantity: number;
  colors: string[];
  sizes: string[];
  image_url: string | null;
  additional_image_urls: string[];
  labels: string[];
  created_at: string;
  updated_at: string;
}

export interface GetProductsResponse {
  success: boolean;
  data: ApiProduct[];
  total: number;
}
