/* eslint-disable prettier/prettier */ 
import { PersonEntity } from "src/person/entities/person.entity";  
import { PersonCityEntity } from "src/person_city/entities/person_city.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'person_address' })
export class PersonAddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_person', nullable: false })
  idPerson: number;

  @Column({ name: 'complement', nullable: true })
  complement: string;

  @Column({ name: 'number', nullable: false })
  numberAddress: number;

  @Column({ name: 'street', nullable: false })
  street: string;

  @Column({ name: 'id_person_city', nullable: false })
  idPersonCity: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date; 
  
  @ManyToOne(() => PersonEntity, (person) => person.addresses)
  @JoinColumn({name: 'id_person', referencedColumnName: 'id'})
  person?: PersonEntity

  @ManyToOne(() => PersonCityEntity, (city) => city.addresses)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  city?: PersonCityEntity;
}
