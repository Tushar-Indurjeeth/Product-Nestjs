import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  category: string;

  @Prop()
  image: string;

  @Prop({ type: 'object' })
  rating: { rate: number; count: number };
}

export const ProductSchema = SchemaFactory.createForClass(Product);
