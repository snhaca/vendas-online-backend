/* eslint-disable prettier/prettier */ 
import { PersonEntity } from 'src/person/entities/person.entity';
import {
  Column,
  CreateDateColumn,
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'person_doc' })
export class PersonDocEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_person', nullable: false })
  idPerson: number;

  @Column({ name: 'vat', nullable: false })
  vat: string;

  @Column({ name: 'nuel', nullable: true })
  nuel: string;

  @Column({ name: 'alvara', nullable: true })
  alvara: string;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: false })
  updatedAt: Date;

  @ManyToOne(() => PersonEntity, (person: PersonEntity) => person.docs)
  @JoinColumn({ name: 'id_person', referencedColumnName: 'id' })
  person?: PersonEntity;
}
