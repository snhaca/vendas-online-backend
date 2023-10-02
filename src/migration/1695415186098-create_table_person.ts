import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePerson1695415186098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.person (
            id integer NOT NULL,
            name character varying NOT NULL,
            vat  character varying NOT NULL, 
            site  character varying NOT NULL,  
            client  character varying NOT NULL,
            importer  character varying NOT NULL,
            exporter  character varying NOT NULL, 
            supplier  character varying NOT NULL, 
            created_at timestamp DEFAULT now() NOT NULL,
            updated_at timestamp DEFAULT now() NOT NULL,
            primary key (id)
        );
                            
        CREATE SEQUENCE public.id_person_seq
          AS integer
          START WITH 1
          INCREMENT BY 1
          NO MINVALUE
          NO MAXVALUE
          CACHE 1;
            
        ALTER SEQUENCE public.id_person_seq OWNED BY public.person.id;
        
        ALTER TABLE ONLY public.person ALTER COLUMN id SET DEFAULT nextval('public.id_person_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table public.person;
    `);
  }
}
