/* eslint-disable prettier/prettier */ 
import { PersonEntity } from "src/person/entities/person.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";

@Entity({ name: 'person_contact' })
export class PersonContactEntity  {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_person', nullable: false })
  idPerson: number;

  @Column({ name: 'phone', nullable: false })
  phone: string;

  @Column({ name: 'mobile', nullable: false })
  mobile: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: false })
  updatedAt: Date;

  @ManyToOne(() => PersonEntity, (person: PersonEntity) => person.contacts,)
  @JoinColumn({ name: 'id_person', referencedColumnName: 'id' })
  person?: PersonEntity; 
}