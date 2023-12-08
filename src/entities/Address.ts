import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}