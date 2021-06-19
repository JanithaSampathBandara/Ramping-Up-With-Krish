import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet {
    @PrimaryGeneratedColumn('uuid')
    pid: string;
    @Column()
    name: string;
    @Column()
    breed: string;
    @Column()
    color: string;
    @Column()
    weight: number;
    @Column()
    dob: Date;
    @Column({nullable: true})
    category: string;
}