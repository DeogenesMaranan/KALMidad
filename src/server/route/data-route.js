import { Router } from 'express'
import { upload } from '../database/init-multer.js'
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

route.get('/getAllUserReports', (req, res) => {
    UserCredentialController.getAllUserReports(req, res)
})

route.get('/getAllReportsSubcollection', (req, res) => {
    UserCredentialController.getAllReportsSubcollection(req, res)
})

route.post('/uploadImage', upload.single('image'), (req, res) => {
    ImageServerController.uploadImage(req, res)
})

route.patch('/updateReportStatus', (req, res) => {
    UserCredentialController.updateReportStatus(req, res)
})

route.delete('/deleteReport', (req, res) => {
    UserCredentialController.deleteReport(req, res)
})

export default route
