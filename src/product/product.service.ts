import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateProduct } from './dtos/create_product.dto';
import { CategoryService } from 'src/category/category.service';
import { UpdateProduct } from './dtos/update_product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private readonly categoryService: CategoryService,
  ) {}

  async findAllProducts(): Promise<ProductEntity[]> {
    const products = await this.productRepository.find();

    if (!products || (await products).length === 0) {
      throw new NotFoundException('Products not found');
    }

    return products;
  }

  async createProduct(createProduct: CreateProduct): Promise<ProductEntity> {
    await this.categoryService.findById(createProduct.categoryId);

    return this.productRepository.save({
      ...createProduct,
    });
  }

  async findProductById(productId: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product id: ${productId} not found`);
    }

    return product;
  }

  async deleteProduct(productId: number): Promise<DeleteResult> {
    await this.findProductById(productId);

    return this.productRepository.delete({ id: productId });
  }

  async updateProduct(
    updateProduct: UpdateProduct,
    productId: number,
  ): Promise<ProductEntity> {
    const product = await this.findProductById(productId);

    return this.productRepository.save({
      ...product,
      ...updateProduct,
    });
  }
}
