import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { CountryEntity } from './entities/country.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
