import { Module } from '@nestjs/common';
import { PersonDocController } from './person_doc.controller';
import { PersonDocService } from './person_doc.service';

@Module({
  controllers: [PersonDocController],
  providers: [PersonDocService]
})
export class PersonDocModule {}
