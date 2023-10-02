import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePersonAddress1695475637027
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` 
            CREATE TABLE public.person_address (
                id integer NOT NULL,
                id_person integer NOT NULL,
                complement character varying,
                number integer NOT NULL,
                street character varying NOT NULL,
                id_person_city integer NOT NULL,
                created_at timestamp DEFAULT now() NOT NULL,
                updated_at timestamp DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (id_person) references public.person(id),
                foreign key (id_person_city) references public.person_city(id)
            );
            
            CREATE SEQUENCE public.id_person_address_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.id_person_address_seq OWNED BY public.person_address.id;
            
            ALTER TABLE ONLY public.person_address ALTER COLUMN id SET DEFAULT nextval('public.id_person_address_seq'::regclass);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table public.person_address;
        `);
  }
}
