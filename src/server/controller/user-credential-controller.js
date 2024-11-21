
import UserDb from '../database/user-credential.js'
import UserInfoModel from '../../model/user-credential.js'
import ReportDetails from '../../model/report-details.js'


class UserCredential {

    #userDb

    constructor() {
        this.#userDb = UserDb
    }

    async insertUserInfo(req, res) {
        try {
            const p_user = new UserInfoModel()
            p_user.firstname = req.body.firstname
            p_user.middlename = req.body.middlename
            p_user.lastname = req.body.lastname
            p_user.town = req.body.town
            p_user.city = req.body.city
            p_user.userType = req.body.userType

            await this.#userDb.insertUserInfo(p_user, req.body.uid)
            
            res.status(201).json({ message: 'Insert successful: ' 
                + p_user.firstname + ' '
                + p_user.lastname
            })
        }
        catch (error) { res.status(400).json({ error: error.message }) }
    }

    async insertNewReport(req, res) {
        try {
            const p_report = new ReportDetails()
            p_report.city = req.body.city
            p_report.flag = req.body.flag
            p_report.date = req.body.date
            p_report.time = req.body.time
            p_report.town = req.body.town
            p_report.status = req.body.status
            p_report.calamity = req.body.calamity
            p_report.imageLink = req.body.imageLink
            p_report.description = req.body.description
         
            await this.#userDb.insertNewReport(p_report, req.body.uid)
            res.status(201).json({ message: 'Report successfully submitted.'})
        }
        catch(error) { res.status(400).json({error: error.message }) }
    }

    async getUserInfoById(req, res) {
        try {
            const { document: p_document, uid: p_uid } = req.query;

            if (!p_document || !p_uid) {
                return res.status(400).json({ 
                    error: 'Missing required parameters: document or uid' 
                });
            }

            const response = await this.#userDb.getUserInfoById(p_document, p_uid)
            res.status(200).json(response)
        }
        catch(error) { res.status(400).json({ error: error.message }) }
    }

    // the Following codes, are still pending to be fix.
    async getAllUserInfo(req, res) {
        try {
            const result = await this.#userDb.getAllUserInfo()
            res.status(200).json({ 
                message: 'Fetching successful.',
                data: result
            })
        }
        catch(error) { res.status(400).json({ error: error.messsage}) }
    }

    async getAllByConstraint(req, res) {
        try {
            const { field: p_field, constraint: p_constraint } = req.query;

            if (!p_field || p_constraint == undefined) {
                return res.status(400).json({ 
                    error: 'Missing required parameters: field or constraint' 
                });
            }

            const response = await this.#userDb.getAllByConstraint(p_field, p_constraint)
            res.status(200).json({ 
                message: 'Fetching successful.',
                data: response
            })
        }
        catch(error) { res.status(400).json({ error: error.message }) }
    }

    async getCount(req, res) {
        try {
            const { field: p_field } = req.body;

            const response = await this.#userDb.getCount(p_field)
            res.status(200).json({
                message: 'Fetching successful.',
                data: response
            })
        }
        catch(error) { res.status(400).json({ error: error.message }) }
    }

    async getAllUserReports(req, res) {
        try {
            const uid = req.query.uid
            const document = req.query.document
            const subcollection = req.query.subcollection

            const response = await this.#userDb.getAllUserReports(document, uid, subcollection)

            res.status(201).json({
                message: 'Fetching successful.',
                data: response
            })
        }
        catch(error) { res.status(400).json({ message: error.message }) }
    }
}


export default new UserCredential()