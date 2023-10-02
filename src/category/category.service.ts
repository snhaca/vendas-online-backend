/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategory } from './dtos/create_category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findAll(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository.find();

    if (!categories || (await categories).length === 0) {
      throw new NotFoundException('Categories empty');
    }

    return categories;
  }

  async findById(categoryId: number): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: {
        id: categoryId,
      },
    });

    if(!category) {
      throw new NotFoundException(`Category id: ${categoryId} not found`);
    }

    return category;
  }

  async findByName(name: string): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: { name,},
    });

    if (!category) {
      throw new NotFoundException(`Category name ${name} not found`);
    }

    return category;
  }

  async createCategory(createCategory: CreateCategory,): Promise<CategoryEntity> {
    const category = await this.findByName(createCategory.name).catch(
      () => undefined
    );

    if (category) {
      throw new BadRequestException(
        `Category name: '${category.name}' exist`,
      );
    }

    return this.categoryRepository.save(createCategory);
  }
}
