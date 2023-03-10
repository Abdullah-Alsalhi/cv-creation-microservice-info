import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
        unsigned: true,
    })
    id: number;

    @Column({
        name: "first_name",
        type: "varchar",
        length: 16,
        nullable: false
    })
    first_name: string;

    @Column({
        name: "last_name",
        type: "varchar",
        length: 16,
        nullable: false
    })
    last_name: string;

    @Column({
        name: "created_at",
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date

    @Column({
        name: "updated_at",
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updated_at: Date
}