import { Router } from 'express'
import UserController from '../controller/user-controller.js'

const router = Router()

router.get('/', () => console.log('users'))

router.post('/signin', (req, res) => {
    UserController.signin(req, res)
})

router.post('/signup', (req, res) => {
    UserController.signup(req, res)
})


export default router