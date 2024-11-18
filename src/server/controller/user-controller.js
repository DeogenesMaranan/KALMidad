import UserAuth from '../database/user-auth.js'

class UserController {
    #userAuth

    constructor() {
        this.#userAuth = UserAuth
    }
    
    async signin(req, res) {
        try {
            const { p_email, p_password } = req.body
            const userCredential = await this.#userAuth.signin(p_email, p_password)
            res.status(201).json({ message: 'Signin successful', user: userCredential });

        } 
        catch(error) {
            res.status(400).json({error: error.message})
        }
    }

    async signup(req, res) {
        try {
            const { p_email, p_password } = req.body
            const userCredential = await this.#userAuth.signup(p_email, p_password)
            res.status(201).json({ message: 'Signup successful', user: userCredential})
        }
        catch(error) {
            res.status(400).json({error: error.message})
        }
    }

    async getUserType(req, res) {
        const response = this.#userAuth.getUserType(req.uid)
        res.status(201).json(response)
    }
}

export default new UserController()