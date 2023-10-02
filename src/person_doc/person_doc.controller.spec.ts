import { Test, TestingModule } from '@nestjs/testing';
import { PersonDocController } from './person_doc.controller';

describe('PersonDocController', () => {
  let controller: PersonDocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonDocController],
    }).compile();

    controller = module.get<PersonDocController>(PersonDocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
