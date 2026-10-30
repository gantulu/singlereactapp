import { FunctionsHttpError } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import type { ApiProduct, GetProductsResponse } from "../types/product";

export async function getProducts(): Promise<ApiProduct[]> {
  const { data, error } = await supabase.functions.invoke<GetProductsResponse>(
    "get-products",
    { method: "GET" }
  );

  if (error) {
    if (error instanceof FunctionsHttpError) {
      let detail = "";
      try {
        const payload = await error.context.json();
        detail = typeof payload?.error === "string" ? payload.error : "";
      } catch {
        // Keep the SDK error message when the response is not JSON.
      }
      throw new Error(detail || error.message);
    }

    throw new Error(error.message || "Unable to connect to the products service.");
  }

  if (!data || data.success !== true || !Array.isArray(data.data)) {
    throw new Error("The products API returned an unexpected response.");
  }

  return data.data as ApiProduct[];
}
