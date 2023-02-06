import { ProductService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(response: any, createProductDto: CreateProductDto): Promise<any>;
    updateProduct(response: any, productId: string, updateProductDto: UpdateProductDto): Promise<any>;
    getProducts(response: any): Promise<any>;
    getProduct(response: any, productId: string): Promise<any>;
    deleteProduct(response: any, productId: string): Promise<any>;
}
