
import ImageServer from '../database/image-server.js'


class ImageServerController {
    #server

    constructor() {
        this.#server = new ImageServer()
    }

    async uploadImage(req, res) {
        try {
            console.log('upload-1')
            const imagePath = req.body.imagePath
            console.log('upload-2')

            const imageURL = this.#server.uploadImage(imagePath)
            
            console.log('upload-3')
            res.status(201).json({ data: imageURL})
        }
        catch(error) { res.status(400).json({ message: error.message })}
    }
}

export default new ImageServerController()