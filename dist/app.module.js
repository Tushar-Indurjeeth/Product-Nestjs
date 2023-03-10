"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_module_1 = require("./products/products.module");
const product_schema_1 = require("./products/product.schema");
const product_controller_1 = require("./products/product.controller");
const products_service_1 = require("./products/products.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            products_module_1.ProductsModule,
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://Admin:${process.env.DB_PASSWORD}@cluster0.fdocids.mongodb.net/?retryWrites=true&w=majority`, {
                dbName: 'productdb',
            }),
            mongoose_1.MongooseModule.forFeature([{ name: 'Product', schema: product_schema_1.ProductSchema }]),
        ],
        controllers: [app_controller_1.AppController, product_controller_1.ProductController],
        providers: [app_service_1.AppService, products_service_1.ProductService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map