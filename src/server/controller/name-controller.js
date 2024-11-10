import NameDb from '../database/name.js'
import NameModel from '../../model/name.js'

class Name {

    #nameDb

    constructor() {
        this.#nameDb = NameDb
    }

    async insertName(req, res) {
        try {
            const p_name = new NameModel()
            p_name.firstname = req.body.firstname
            p_name.middlename = req.body.middlename
            p_name.lastname = req.body.lastname

            await this.#nameDb.insertName(p_name, req.body.uid)
            res.status(201).json({ message: 'Insert successful: ' 
                + p_name.firstname + ' '
                + p_name.lastname
            })
        }
        catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

export default new Name()