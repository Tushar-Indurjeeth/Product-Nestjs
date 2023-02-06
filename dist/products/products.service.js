"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async createProduct(createProductDto) {
        const newProduct = new this.productModel(createProductDto);
        return newProduct.save();
    }
    async updateProduct(productId, updateProductDto) {
        const existingProduct = await this.productModel.findByIdAndUpdate(productId, updateProductDto, { new: true });
        if (!existingProduct) {
            throw new common_1.NotFoundException(`Product #${productId} not found`);
        }
        return existingProduct;
    }
    async getAllProducts() {
        const productData = await this.productModel.find();
        if (!productData || productData.length == 0) {
            throw new common_1.NotFoundException('Products data not found!');
        }
        return productData;
    }
    async getProduct(productId) {
        const existingProducts = await this.productModel.findById(productId).exec();
        if (!existingProducts) {
            throw new common_1.NotFoundException(`Product #${productId} not found`);
        }
        return existingProducts;
    }
    async deleteProduct(productId) {
        const deletedProduct = await this.productModel.findByIdAndDelete(productId);
        if (!deletedProduct) {
            throw new common_1.NotFoundException(`Product #${productId} not found`);
        }
        return deletedProduct;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map