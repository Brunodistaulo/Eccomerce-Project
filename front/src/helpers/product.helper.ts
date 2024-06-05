import { CardProps } from "@/types/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts() {
  try {
    const res = await fetch(`${apiUrl}/products`, {
      method: "GET",
      next: { revalidate: 1800 },
    });
    const data: CardProps[] = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};


export async function getProductById(id: string) {

  try {
    const products = await fetchProducts();
    const product = products.find(product => product.id === parseInt(id));
    if(!product) throw new Error('Product not found');
    return product
  } catch (error: any) {
    throw new Error(error);
  }
}

