/* eslint-disable prettier/prettier */
import { CartProductEntity } from 'src/cart_product/entities/cart_product.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn, 
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
 
@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'category_id', nullable: false })
  categoryId: number;

  @Column({ name: 'price', type: 'decimal', nullable: false })
  price: number;

  @Column({ name: 'image', nullable: false })
  image: string;

  // @Column({ name: 'weight', nullable: false })
  // weight: number;

  // @Column({ name: 'length', nullable: false })
  // length: number;

  // @Column({ name: 'height', nullable: false })
  // height: number;

  // @Column({ name: 'width', nullable: false })
  // width: number;

  // @Column({ name: 'diameter', nullable: false })
  // diameter: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  
  @OneToMany(() => CartProductEntity, (cartProduct) => cartProduct.product)
  cartProduct?: CartProductEntity[];

  @ManyToOne(
    () => CategoryEntity,
    (category: CategoryEntity) => category.products,
  )
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category?: CategoryEntity;

  // @OneToMany(() => OrderProductEntity, (orderProduct) => orderProduct.product)
  // ordersProduct?: OrderProductEntity[];
 
}