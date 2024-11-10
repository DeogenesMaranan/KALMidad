import UserAuth from '../database/user-auth.js'

class UserController {
    #userAuth

    constructor() {
        this.#userAuth = UserAuth
    }
    
    async signin(req, res) {
        const { p_email, p_password } = req.body

        try {
            const userCredential = await this.#userAuth.signin(p_email, p_password)
            res.status(201).json({ email: userCredential.email })
        } 
        catch(error) {
            res.status(400).json({error: error.message})
        }
    }

}

export default new UserController()