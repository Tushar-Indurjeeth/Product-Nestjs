import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ProductSchema } from './products/product.schema';
import { ProductController } from './products/product.controller';
import { ProductService } from './products/products.service';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'productdb',
    }),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
