import { Request, Response, Router } from 'express'
import { UserController } from './controllers/UserController'
import { userRepository } from './repositories/userRepository'
import { User } from './entities/User'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {

	// const leandro = await userRepository.findByName('Leandro')
	// const leandro = await User.findByName('Ana')

	return res.json()
})

routes.post('/usuarios', new UserController().store)

export default routes
