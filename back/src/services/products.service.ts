import { CreateProductDto } from "../dtos/createProduct";
import { Product } from "../entities/Product";
import { CreateProductRepository, ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};

export const CreateProductService = async (Product: CreateProductDto) => {
  return await CreateProductRepository(Product);
}