
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
                        fetch_format: 'auto',
                        crop: 'crop', 
                        aspect_ratio: '16:9',
                        gravity: 'center'
                    }]
                })
                resolve(imageUrl)
            } 
            catch(error) { reject(error) }
        })
    }

    deleteImageFromCloudinary(url) {
        const publicId = url.split('/').pop().split('?')[0]
      
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                throw new Error("Error deleting image:", error)
            } else {
                return ("Image deleted successfully:", result)
            }
        })
    }
}

export default ImageServer