/* eslint-disable prettier/prettier */  
import { CountryEntity } from "src/country/entities/country.entity";
import { PersonAddressEntity } from "src/person_address/entities/person_address.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: 'person_city' })
export class PersonCityEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_country', nullable: false })
  idCountry: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date; 
  
  @OneToMany(() => PersonAddressEntity, (address) => address.person)
  addresses?: PersonAddressEntity[];

  @ManyToOne(() => CountryEntity, (country) => country.cities)
  @JoinColumn({ name: 'id_country', referencedColumnName: 'id' })
  country?: CountryEntity;   
}