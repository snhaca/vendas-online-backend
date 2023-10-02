import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePersonCity1695472620408 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` 
        CREATE TABLE public.person_city (
            id integer NOT NULL,
            id_country integer NOT NULL,
            name character varying NOT NULL,
            created_at timestamp DEFAULT now() NOT NULL,
            updated_at timestamp DEFAULT now() NOT NULL,
            primary key (id),
            foreign key (id_country) references public.country(id)
        );

        CREATE SEQUENCE public.id_person_city_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
            
        ALTER SEQUENCE public.id_person_city_seq OWNED BY public.person_city.id;

        ALTER TABLE ONLY public.person_city ALTER COLUMN id SET DEFAULT nextval('public.id_person_city_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table public.person_city;
        `);
  }
}
