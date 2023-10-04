import { Module } from '@nestjs/common';
import { CartProductService } from './cart_product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartProductEntity } from './entities/cart_product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartProductEntity])],
  providers: [CartProductService],
  exports: [CartProductService],
})
export class CartProductModule {}
