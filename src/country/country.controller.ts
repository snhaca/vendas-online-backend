import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';
import { ReturnCountryDTO } from './dtos/return_country.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';

@Roles(UserType.User, UserType.Admin)
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async findAllCountries(): Promise<ReturnCountryDTO[]> {
    return (await this.countryService.findAllCountries()).map(
      (country) => new ReturnCountryDTO(country),
    );
  }
}
