import { Router } from 'express'
import UserCredentialController from '../controller/user-credential-controller.js'

const route = Router()

route.get('/getAllByConstraint', (req, res) => {
    UserCredentialController.getAllByConstraint(req, res)
})

route.get('/getCount', (req, res) => {
    UserCredentialController.getCount(req, res)
})

export default route
