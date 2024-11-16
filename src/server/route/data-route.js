import { Router } from 'express'
import ImageServerController from '../controller/image-server-controller.js'
import UserCredentialController from '../controller/user-credential-controller.js'

const route = Router()

route.get('/getAllByConstraint', (req, res) => {
    UserCredentialController.getAllByConstraint(req, res)
})

route.get('/getCount', (req, res) => {
    UserCredentialController.getCount(req, res)
})

route.post('/insertReport', (req, res) => {
    UserCredentialController.insertNewReport(req, res)
})

route.post('/uploadImage', (req, res) => {
    ImageServerController.uploadImage(req, res)
})

export default route
