import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCountry1695417642713 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` 
        CREATE TABLE public.country (
            id integer NOT NULL,
            name character varying NOT NULL,
            created_at timestamp DEFAULT now() NOT NULL,
            updated_at timestamp DEFAULT now() NOT NULL,
            primary key (id)
        );
    
        CREATE SEQUENCE public.id_country_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
                
        ALTER SEQUENCE public.id_country_seq OWNED BY public.country.id;

        ALTER TABLE ONLY public.country ALTER COLUMN id SET DEFAULT nextval('public.id_country_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table public.country;
        `);
  }
}
