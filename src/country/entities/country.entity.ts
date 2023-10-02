/* eslint-disable prettier/prettier */  
import { PersonCityEntity } from "src/person_city/entities/person_city.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity({ name: 'country' })
export class CountryEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
 
  @OneToMany(() => PersonCityEntity, (city) => city.country)
  cities?: PersonCityEntity[];
}