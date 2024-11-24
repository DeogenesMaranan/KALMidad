import { Router } from 'express'
import UserController from '../controller/user-controller.js'
import UserCredentialController from '../controller/user-credential-controller.js'
import userController from '../controller/user-controller.js'


const route = Router()

route.get('/', () => console.log('users'))

route.get('/getUserType', (req, res) => {
    UserController.getUserType(req, res)
})

route.post('/signin', (req, res) => {
    UserController.signin(req, res)
})

route.post('/signup', (req, res) => {
    UserController.signup(req, res)
})

route.post('/insertUserInfo', (req, res) => {
    UserCredentialController.insertUserInfo(req, res)
})

route.patch('/insertNewUser', (req, res) => {
    UserCredentialController.insertNewUser(req, res)
})

route.patch('/updateUserInfo', (req, res) => {
    UserCredentialController.updateUserInfo(req, res)
})

route.get('/getUserInfoById', (req, res) => {
    UserCredentialController.getUserInfoById(req, res)
})

route.get('/getAllUserInfo', (req, res) => {
    UserCredentialController.getAllUserInfo(req, res)
})

export default route