/* eslint-disable prettier/prettier */
import { PersonEntity } from "../entities/person.entity";

export class ReturnPersonDto {
    id: number;
    name: string;
    vat: string;
    site: string; 
    client: string;
    importer: string;
    exporter: string;
    supplier: string;

  constructor(personEntity: PersonEntity) {
    this.id = personEntity.id;
    this.name = personEntity.name;
    this.vat = personEntity.vat;
    this.site = personEntity.site; 
    this.client = personEntity.client;
    this.importer = personEntity.importer;
    this.exporter = personEntity.exporter;
    this.supplier = personEntity.supplier;
  }
}