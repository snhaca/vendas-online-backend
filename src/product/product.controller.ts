import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ReturnProduct } from './dtos/return_product.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { CreateProduct } from './dtos/create_product.dto';
import { ProductEntity } from './entities/product.entity';
import { DeleteResult } from 'typeorm';
import { UpdateProduct } from './dtos/update_product.dto';

@Roles(UserType.User, UserType.Admin)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<ReturnProduct[]> {
    return (await this.productService.findAllProducts()).map(
      (product) => new ReturnProduct(product),
    );
  }

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  async createProduct(
    @Body() createProduct: CreateProduct,
  ): Promise<ProductEntity> {
    return this.productService.createProduct(createProduct);
  }

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Delete('/:productId')
  async deleteProduct(
    @Param('productId') productId: number,
  ): Promise<DeleteResult> {
    return this.productService.deleteProduct(productId);
  }

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Put('/:productId')
  async updateProduct(
    @Body() updateProduct: UpdateProduct,
    @Param('productId') productId: number,
  ): Promise<ProductEntity> {
    return this.productService.updateProduct(updateProduct, productId);
  }
}
