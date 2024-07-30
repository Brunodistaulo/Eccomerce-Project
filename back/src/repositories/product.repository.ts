import { AppDataSource } from "../config/dataSource";
import { CreateProductDto } from "../dtos/createProduct";
import { Product } from "../entities/Product";

export const ProductRepository = AppDataSource.getRepository(Product);

export const CreateProductRepository = async (Product: CreateProductDto) => {
    return await ProductRepository.save(Product);
}