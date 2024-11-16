
import env from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'


class ImageServer {

    constructor() {
        env.config()

        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY
        })
    }

    uploadImage(imagePath) {
        return new Promise(async (resolve, reject) => {
            try {
                const results = await cloudinary.uploader.upload(imagePath)
    
                const imageUrl = cloudinary.url(results.public_id, {
                    transformation: [{
                        quality: 'auto',
                        fetch_format: 'auto'
                    }]
                })
                resolve(imageUrl)
            } 
            catch(error) { reject(error) }
        })
    }
}

export default ImageServer