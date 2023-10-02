import { Test, TestingModule } from '@nestjs/testing';
import { PersonDocService } from './person_doc.service';

describe('PersonDocService', () => {
  let service: PersonDocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonDocService],
    }).compile();

    service = module.get<PersonDocService>(PersonDocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
