import { BaseEntity, Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Addresss } from "./Address"
import { Role } from "./Role"

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

    @OneToOne(() => Addresss, (address) => address.user)
    address: Addresss

    @OneToMany(() => Addresss, (address) => address.user)
    addreses: Addresss[]

    @ManyToMany(() => Role, (role) => role.users)
    roles: Role[]

    static async findByName(name: string) {
        return this.find({ where: { name } })
    }
}