import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1658950799787 implements MigrationInterface {
    name = 'createTable1658950799787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_users" ("id" SERIAL NOT NULL, "usr_name" character varying(255) NOT NULL, "usr_email" character varying(255) NOT NULL, "usr_password" character varying(255) NOT NULL, "usr_created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_d13dd163878a577a38a667751df" UNIQUE ("usr_email"), CONSTRAINT "PK_bb1d884179b3e42514b36c01e4e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tbl_favorite_characters" ("id" SERIAL NOT NULL, "fc_id_character" integer NOT NULL, "fc_name" character varying(255) NOT NULL, "fc_status" character varying(50) NOT NULL, "fc_species" character varying(50) NOT NULL, "fc_type" character varying(100) NOT NULL, "fc_gender" character varying(50) NOT NULL, "fc_origin" text NOT NULL, "fc_location" text NOT NULL, "fc_image" character varying(255) NOT NULL, "fc_episode" text NOT NULL, "fc_url" character varying(255) NOT NULL, "fc_created" character varying(255) NOT NULL, "fc_id_user" integer, CONSTRAINT "PK_b9a784fb9b761d0355a67cada90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tbl_favorite_characters" ADD CONSTRAINT "FK_41e4eca5e87da9b3ed54a8fe971" FOREIGN KEY ("fc_id_user") REFERENCES "tbl_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_favorite_characters" DROP CONSTRAINT "FK_41e4eca5e87da9b3ed54a8fe971"`);
        await queryRunner.query(`DROP TABLE "tbl_favorite_characters"`);
        await queryRunner.query(`DROP TABLE "tbl_users"`);
    }

}
