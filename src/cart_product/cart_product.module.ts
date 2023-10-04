import { Module } from '@nestjs/common';
import { CartProductService } from './cart_product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartProductEntity } from './entities/cart_product.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([CartProductEntity]), ProductModule],
  providers: [CartProductService],
  exports: [CartProductService],
})
export class CartProductModule {}
