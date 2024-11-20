
import ImageServer from '../database/image-server.js'


class ImageServerController {
    #server

    constructor() {
        this.#server = new ImageServer()
    }

    async uploadImage(req, res) {
        try {
            const imagePath = req.file.path
            const imageURL = await this.#server.uploadImage(imagePath)

            res.status(201).json({ 
                message: "Upload successful.",
                data: imageURL
            })
        }
        catch(error) { res.status(400).json({ message: error.message })}
    }
}

export default new ImageServerController()