import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'first_name',
        nullable: false,
    })
    firstName: string;

    @Column({
        type: 'varchar',
        name: 'last_name',
        nullable: false,
    })
    lastName: string;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    createdAt: Date;


    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        onUpdate: "CURRENT_TIMESTAMP(6)",
        default: (): string => "CURRENT_TIMESTAMP(6)"
    })
    updatedAt: Date;

}