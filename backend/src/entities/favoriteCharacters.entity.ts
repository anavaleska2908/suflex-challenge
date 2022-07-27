import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("tbl_favorite_characters")
export class Favorite_character {
    @PrimaryGeneratedColumn()
    readonly id: number;
    @Column()
    fc_id_character: number;
    @Column({ type: "varchar", length: 255 })
    fc_name: string;
    @Column({type: "varchar", length: 50})
    fc_status: string;
    @Column({type: "varchar", length: 50})
    fc_species: string;
    @Column({type: "varchar", length: 100})
    fc_type: string;
    @Column({type: "varchar", length: 50})
    fc_gender: string;
    @Column("simple-json")
    fc_origin: { name: string; url: string};
    @Column("simple-json")
    fc_location: { name: string; url: string};
    @Column({type: "varchar", length: 255})
    fc_image: string;
    @Column("simple-array")
    fc_episode: string[];
    @Column({type: "varchar", length: 255})
    fc_url: string;
    @Column({type: "varchar", length: 255})
    fc_created: string;
    @ManyToOne((type) => User, (user) => user.usr_favorite_characters)
    @JoinColumn({name: "fc_id_user"})
    fc_id_user: User
}





