import multer from 'multer';

class MulterService {
    static storage = multer.diskStorage({
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

    static upload = multer({ storage: MulterService.storage });
}

export default MulterService.upload;
export const upload = MulterService.upload;
