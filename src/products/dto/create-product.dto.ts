import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly title: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @MaxLength(600)
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @MaxLength(600)
  @IsNotEmpty()
  readonly image: string;

  readonly rating: { rate: number; count: number };
}
