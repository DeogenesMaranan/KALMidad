
import ImageServer from '../database/image-server.js'


class ImageServerController {
    #server

    constructor() {
        this.#server = new ImageServer()
    }

    async uploadImage(req, res) {
        try {
            console.log('upload-1')
            const imagePath = req.file.path
            console.log('upload-2')
            const imageURL = await this.#server.uploadImage(imagePath)
            console.log('upload-3')
            res.status(201).json({ 
                message: "Upload successful.",
                data: imageURL
            })
            console.log('upload-4')
        }
        catch(error) { res.status(400).json({ message: error.message })}
    }
}

export default new ImageServerController()