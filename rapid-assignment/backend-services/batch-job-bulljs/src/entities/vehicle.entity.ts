import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    carMake: string;

    @Column()
    carModel: string;

    @Column()
    vinNumber: string;
    
    @Column()
    manufacturedDate: string;

    @Column({nullable: true})
    ageOfVehicle: number;
}