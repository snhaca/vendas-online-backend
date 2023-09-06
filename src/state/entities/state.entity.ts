/* eslint-disable prettier/prettier */
//import { CityEntity } from "src/city/entities/city.entity";
import { Entity, 
    PrimaryGeneratedColumn, 
    Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'state' })
export class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
 
  //@OneToMany(() => CityEntity, (city) => city.state)
  //cities?: CityEntity[];
}