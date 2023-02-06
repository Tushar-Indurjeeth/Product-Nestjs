import { Model } from 'mongoose';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { IProduct } from 'src/products/product.interface';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<IProduct>);
    createProduct(createProductDto: CreateProductDto): Promise<IProduct>;
    updateProduct(productId: string, updateProductDto: UpdateProductDto): Promise<IProduct>;
    getAllProducts(): Promise<IProduct[]>;
    getProduct(productId: string): Promise<IProduct>;
    deleteProduct(productId: string): Promise<IProduct>;
}
