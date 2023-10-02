/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReturnCategoryDTO } from './dtos/return_category.dto';
import { CategoryService } from './category.service';
import { CreateCategory } from './dtos/create_category.dto';
import { CategoryEntity } from './entities/category.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';

@Roles(UserType.User, UserType.Admin)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAllCategories(): Promise<ReturnCategoryDTO[]> {
    return (await this.categoryService.findAll()).map(
      (category) => new ReturnCategoryDTO(category),
    );
  }

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  async createCategory(
    @Body() createCategory: CreateCategory
    ): Promise<CategoryEntity> {
    return this.categoryService.createCategory(createCategory);
  }
}
