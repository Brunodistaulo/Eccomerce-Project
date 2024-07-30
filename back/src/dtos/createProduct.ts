export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId: number;
    stock: number;
    caracteristics?: string[];
}