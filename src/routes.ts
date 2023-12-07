import { Request, Response, Router } from 'express'
import { User } from './entities/User'
import { AppDataSource } from './data-source'

const userRepository = AppDataSource.getRepository(User)

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {

	// const users = await userRepository.find()
	// const user = await userRepository.findOne({ where: { name: 'Ana' } })

	return res.json('tudo certo')
})

routes.post('/usuarios', async (req: Request, res: Response) => {
	const { name, email, password } = req.body

	const newUser = userRepository.create({ name, email, password })
	await userRepository.save(newUser)

	return res.status(201).json({ ...newUser })
})

export default routes
