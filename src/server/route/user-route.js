import { Router } from 'express'
import UserController from '../controller/user-controller.js'

const router = Router()

router.get('/', () => console.log('users'))

router.post('/signin', (req, res) => {
    UserController.signin(req, res)
})


export default router