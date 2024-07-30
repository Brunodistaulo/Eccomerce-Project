import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { CreateProductService, getProductsService } from "../services/products.service";
import { CreateProductDto } from "../dtos/createProduct";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const createProduct = catchedController(
  async (req: Request, res: Response) => {
    const Product: CreateProductDto = req.body;
    const newProduct = await CreateProductService(Product);
    res.send(newProduct);
  }
)