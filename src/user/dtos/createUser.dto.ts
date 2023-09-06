/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  vat: string;

  @IsString()
  password: string;
}
