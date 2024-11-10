import { Router } from 'express'
import NameController from '../controller/name-controller.js'

const route = Router()

route.post('/insertName', (req, res) => {
    NameController.insertName(req, res)
})

export default route