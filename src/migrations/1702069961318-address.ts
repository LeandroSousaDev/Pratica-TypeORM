import { table } from "console"
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class Address1702069961318 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'addresses',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'zipcode',
                    type: 'text'
                },
                {

                    name: 'user_id',
                    type: 'integer'

                },
                {
                    name: 'street',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'Number',
                    type: 'text',
                    isNullable: true
                }
            ]
        }))
        await queryRunner.createForeignKey(
            'addresses',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedTableName: 'users',
                referencedColumnNames: ['id']
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses')
    }

}
