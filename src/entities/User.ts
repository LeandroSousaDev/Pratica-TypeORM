import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    static async findByName(name: string) {
        return this.find({ where: { name } })
    }
}