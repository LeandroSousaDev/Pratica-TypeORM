import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity('addresses')
export class Addresss {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    zipcode: string

    @Column({ nullable: false })
    street: string

    @Column({ nullable: false })
    number: string

    @OneToOne(() => User, (user) => user.address)
    @JoinColumn({ name: 'user_id' })
    // user: User

    @ManyToOne(() => User, (user) => user.addreses)
    @JoinColumn({ name: 'user_id' })
    user: User
}