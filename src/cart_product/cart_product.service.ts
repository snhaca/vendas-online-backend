import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartProductEntity } from './entities/cart_product.entity';
import { Repository } from 'typeorm';
import { InsertCartDTO } from 'src/cart/dtos/insert_cart';
import { CartEntity } from 'src/cart/entities/cart.entity';

@Injectable()
export class CartProductService {
  constructor(
    @InjectRepository(CartProductEntity)
    private readonly cartProductRepository: Repository<CartProductEntity>, //private readonly cartProductService: CartProductService,
  ) {}

  async verifyProductInCart(
    productId: number,
    cartId: number,
  ): Promise<CartProductEntity> {
    const cartProduct = await this.cartProductRepository.findOne({
      where: {
        productId,
        cartId,
      },
    });

    if (!cartProduct) {
      throw new NotFoundException('Product not found in cat');
    }

    return cartProduct;
  }

  async createProductInCart(
    insertCartDTO: InsertCartDTO,
    cartId: number,
  ): Promise<CartProductEntity> {
    return this.cartProductRepository.save({
      amount: insertCartDTO.amount,
      productId: insertCartDTO.productId,
      cartId,
    });
  }

  async insertProductInCart(
    insertCartDTO: InsertCartDTO,
    cart: CartEntity,
  ): Promise<CartProductEntity> {
    const cartProduct = await this.verifyProductInCart(
      insertCartDTO.productId,
      cart.id,
    ).catch(() => undefined);

    if (!cartProduct) {
      return this.createProductInCart(insertCartDTO, cart.id);
    }

    return this.cartProductRepository.save({
      ...cartProduct,
      amount: cartProduct.amount + insertCartDTO.amount,
    });
  }
}
