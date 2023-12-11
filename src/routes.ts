import { Request, Response, Router } from 'express'
import { UserController } from './controllers/UserController'
import { userRepository } from './repositories/userRepository'
import { User } from './entities/User'
import { adressRepository } from './repositories/adressRepository'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {

	// const leandro = await userRepository.findByName('Leandro')
	// const leandro = await User.findByName('Ana')

	const leandro = await userRepository.findOne({
		where: {
			email: 'leandro@email.com'
		},
		relations: {
			address: true
		}
	})

	const address = await adressRepository.find({
		relations: {
			user: true
		}
	})

	return res.json()
})

routes.post('/usuarios', new UserController().store)

export default routes
