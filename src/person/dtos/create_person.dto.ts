/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  name: string;

  @IsString()
  vat: string

  @IsString()
  site: string 

  @IsString()
  client: string

  @IsString()
  importer: string

  @IsString()
  exporter: string

  @IsString()
  supplier: string
 
}
