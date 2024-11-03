import {v4 as uuid} from 'uuid'


class User {
    constructor() {
        this.baseUrl = "http://localhost:5000/user/"
        this.methods = []
        this.mockUsers = []

        this.initializeMethods()
        this.initializeMockUsers()
    }

    getMethod = (req, res) => {
        res.send(this.methods)
    }
    
    getAll = (req, res) => {
        res.send(this.mockUsers)
    }
    
    getById = (req, res) => {
        const p_uid = req.body.uid
    
        const user = this.mockUsers.find((user) => user.uid === p_uid)
    
        res.send(user)
    }

    insert = (req, res) => {
        const user = req.body
        res.send(`INSERTING USER ${user.firstname} ${user.lastname}.`)
    }
    
    deleteId = (req, res) => {
        const p_uid = req.body.uid
    
        this.mockUsers = this.mockUsers.filter((user) => user.uid !== p_uid)
    
        res.send(`SUCCESSFULLY DELETED USER WITH UID ${p_uid}.`)
    }
    
    initializeMethods() {
        this.methods = [
                {
                GetAll:  this.baseUrl + "getAll",
                GetById: this.baseUrl + "getById",
                Insert: this.baseUrl + "insert",
                Update: this.baseUrl + "update",
                Delete: this.baseUrl + "delete"
            }
        ]
    }

    initializeMockUsers() {
        this.mockUsers = [
            {
                firstname:  "Knoxx Gideon",
                middlename: "Navarro",
                lastname:   "Montafalco",
                uid:        uuid()
            },
            {
                firstname:  "Azrael Ian",
                middlename: "Navarro",
                lastname:   "Montafalco",
                uid:        uuid()
            },
            {
                firstname:  "Entice",
                middlename: "Dela Merced",
                lastname:   "Montafalco",
                uid:        uuid()
            }
        ]
    }
}

export default new User;