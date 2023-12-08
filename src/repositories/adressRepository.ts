import { AppDataSource } from "../data-source"
import { Addresss } from "../entities/Address"

export const adressRepository = AppDataSource.getRepository(Addresss)