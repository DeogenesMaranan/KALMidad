import { Router } from 'express'
import UserController from '../controller/user-controller.js'
import UserCredentialController from '../controller/user-credential-controller.js'


const route = Router()

route.get('/', () => console.log('users'))

route.post('/signin', (req, res) => {
    UserController.signin(req, res)
})

route.post('/signup', (req, res) => {
    UserController.signup(req, res)
})

route.post('/insertUserInfo', (req, res) => {
    UserCredentialController.insertUserInfo(req, res)
})

route.get('/getUserInfoById', (req, res) => {
    UserCredentialController.getUserInfoById(req, res)
})

route.get('/getAllUserInfo', (req, res) => {
    UserCredentialController.getAllUserInfo(req, res)
})

export default route