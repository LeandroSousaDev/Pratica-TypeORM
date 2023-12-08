import { adressRepository } from "../repositories/adressRepository"
import { Request, Response } from "express"

export class AddressController {
    async store(req: Request, res: Response) {
        const { zipcode, street, number } = req.body

        const newAddress = adressRepository.create({ zipcode, street, number })
        await adressRepository.save(newAddress)

        return res.status(201).json({ ...newAddress })
    }
}