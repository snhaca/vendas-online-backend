import { Module } from '@nestjs/common';
import { PersonAddressController } from './person_address.controller';
import { PersonAddressService } from './person_address.service';

@Module({
  controllers: [PersonAddressController],
  providers: [PersonAddressService]
})
export class PersonAddressModule {}
