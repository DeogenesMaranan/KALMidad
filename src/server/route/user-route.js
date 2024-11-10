import { Router } from 'express'
import UserController from '../controller/user-controller.js'

const router = Router()

router.get('/', () => console.log('users'))

router.post('/signin', UserController.signin.bind(UserController))

export default router