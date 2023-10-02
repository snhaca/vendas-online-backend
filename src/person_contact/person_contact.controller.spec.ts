import { Test, TestingModule } from '@nestjs/testing';
import { PersonContactController } from './person_contact.controller';

describe('PersonContactController', () => {
  let controller: PersonContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonContactController],
    }).compile();

    controller = module.get<PersonContactController>(PersonContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
