import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { PersonEntity } from './entities/person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
