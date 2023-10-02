import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePersonContact1695475406569
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` 
            CREATE TABLE public.person_contact (
                id integer NOT NULL,
                id_person integer NOT NULL,
                phone character varying,
                mobile character varying,
                email character varying NOT NULL, 
                created_at timestamp DEFAULT now() NOT NULL,
                updated_at timestamp DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (id_person) references public.person(id)
            );
            
            CREATE SEQUENCE public.id_person_contact_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.id_person_contact_seq OWNED BY public.person_contact.id;
            
            ALTER TABLE ONLY public.person_contact ALTER COLUMN id SET DEFAULT nextval('public.id_person_contact_seq'::regclass);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table public.person_contact;
        `);
  }
}
