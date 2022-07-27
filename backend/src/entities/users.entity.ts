import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Favorite_character } from "./favoriteCharacters.entity";

@Entity("tbl_users")
export class User {
    @PrimaryGeneratedColumn()
    readonly id: number;
    @Column({ type: "varchar", length: 255 })
    usr_name: string;
    @Column({ type: "varchar", length: 255, unique: true })
    usr_email: string;
    @Column({ type: "varchar", length: 255 })
    usr_password: string;
    @OneToMany((type) => Favorite_character, (favorite_character) => favorite_character.fc_id_user, { eager: true, onDelete: "CASCADE" })
    usr_favorite_characters: Favorite_character[]
    @CreateDateColumn()
    usr_created_at: Date;
}

