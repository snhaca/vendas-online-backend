/* eslint-disable prettier/prettier */ 
import { CartEntity } from '../entities/cart.entity';
import { ReturnCartProductDTO } from 'src/cart_product/dtos/return_cart_product.dto';

export class ReturnCartDTO {
  id: number;
  cartProduct?: ReturnCartDTO[];

  constructor(cart: CartEntity){
    this.id = cart.id;
    this.cartProduct = cart.cartProduct ? cart.cartProduct.map(
      (cartProduct) => new ReturnCartProductDTO(cartProduct),
    )
    : undefined;
  }
}
