/* eslint-disable prettier/prettier */
import { PersonAddressEntity } from 'src/person_address/entities/person_address.entity';  
import { PersonContactEntity } from 'src/person_contact/entities/person_contact.entity';
import { PersonDocEntity } from 'src/person_doc/entities/person_doc.entity';
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  OneToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from 'typeorm';

@Entity({ name: 'person' })
export class PersonEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'vat', nullable: false })
  vat: string;

  @Column({ name: 'site', nullable: true })
  site: string;
 
  @Column({ name: 'client', nullable: false })
  client: string;

  @Column({ name: 'importer', nullable: false })
  importer: string;

  @Column({ name: 'exporter', nullable: false })
  exporter: string;

  @Column({ name: 'supplier', nullable: false })
  supplier: string;
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date; 
    
  @OneToMany(() => PersonDocEntity, (doc: PersonDocEntity) => doc.person )
  docs?: PersonDocEntity[];
    
  @OneToMany(() => PersonContactEntity, (contact: PersonContactEntity) => contact.person )
  contacts: PersonContactEntity[]; 

  @OneToMany(() => PersonAddressEntity, (address) => address.person)
  addresses?: PersonAddressEntity[];

}
