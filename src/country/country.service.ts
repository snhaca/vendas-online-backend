import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryEntity } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  async findAllCountries(): Promise<CountryEntity[]> {
    const countries = await this.countryRepository.find();

    if (!countries || (await countries).length === 0) {
      throw new NotFoundException('Countries empty');
    }

    return countries;
  }
}
