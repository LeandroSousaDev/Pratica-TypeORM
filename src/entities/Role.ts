import { Column, JoinTable, ManyToMany, PrimaryColumn } from "typeorm"
import { User } from "./User"

export class Role {

    @PrimaryColumn()
    id: number

    @Column()
    role: string

    @ManyToMany(() => User, (user) => user.roles)
    @JoinTable({
        name: 'user_role',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'role',
            referencedColumnName: 'id'
        }
    })
    users: User[]
}