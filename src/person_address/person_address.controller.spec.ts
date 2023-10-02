import { Test, TestingModule } from '@nestjs/testing';
import { PersonAddressController } from './person_address.controller';

describe('PersonAddressController', () => {
  let controller: PersonAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonAddressController],
    }).compile();

    controller = module.get<PersonAddressController>(PersonAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
