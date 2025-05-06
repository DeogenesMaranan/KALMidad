class RequestService {
    static async getUserInfo(p_uid) {
        return await axios.get('http://localhost:5500/users/getUserInfoById', {
            params: {
                document: 'users-credential',
                uid: p_uid,
            },
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static async insertUserInfo(p_user, p_uid) {
        return await axios.post('http://localhost:5500/users/insertUserInfo', {
            uid: p_uid,
            firstname: p_user.firstname,
            middlename: p_user.middlename,
            lastname: p_user.lastname,
            town: p_user.town,
            city: p_user.city,
            userType: p_user.userType,
        }, {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static async getAllUserReport(p_uid) {
        return await axios.get('http://localhost:5500/data/getAllUserReports', {
            params: {
                document: 'report',
                uid: p_uid,
                subcollection: 'userReport',
            },
        });
    }

    static async uploadImage(selectedImage) {
        const formData = new FormData();
        formData.append('image', selectedImage);

        return await axios.post('http://localhost:5500/data/uploadImage', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }

    static async insertReport(p_report, p_uid) {
        return await axios.post('http://localhost:5500/data/insertReport', {
            uid: p_uid,
            city: p_report.city,
            flag: p_report.flag,
            date: p_report.date,
            time: p_report.time,
            town: p_report.town,
            status: 'pending',
            calamity: p_report.calamity,
            imageLink: p_report.imageLink,
            description: p_report.description,
        }, {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static async insertNewUser(p_uid) {
        return await axios.patch('http://localhost:5500/users/insertNewUser', {
            uid: p_uid,
        }, {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static async signInUser(p_email, p_password, recaptchaToken) {
        const response = await axios.post('http://localhost:5500/users/signin', {
            p_email, p_password, recaptchaToken,
        }, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.data && response.data.message) return response;
    }

    static async signupUser(p_email, p_password, recaptchaToken) {
        return await axios.post('http://localhost:5500/users/signup', {
            p_email, p_password, recaptchaToken,
        }, {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static async getUserType(uid) {
        return await axios.get('http://localhost:5500/users/getUserType', {
            params: { uid },
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static async deleteReport(p_uid, p_imageLink, p_subcollection) {
        return await axios.delete('http://localhost:5500/data/deleteReport', {
            headers: { 'Content-Type': 'application/json' },
            data: {
                uid: p_uid,
                imageLink: p_imageLink,
                subcollection: p_subcollection,
            },
        });
    }

    static async updateUserInfo(data) {
        return await axios.patch('http://localhost:5500/users/updateUserInfo', data, {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static async updateReportStatus(uid, reportId, status) {
        return await axios.patch('http://localhost:5500/data/updateReportStatus', {
            uid, reportId, status,
        }, {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static async getAllReportsSubcollection() {
        return await axios.get('http://localhost:5500/data/getAllReportsSubcollection', {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    static async getCount(field) {
        return await axios.get('http://localhost:5500/data/getCount', {
            params: { field },
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export const getUserInfo = RequestService.getUserInfo;
export const insertUserInfo = RequestService.insertUserInfo;
export const getAllUserReport = RequestService.getAllUserReport;
export const uploadImage = RequestService.uploadImage;
export const insertReport = RequestService.insertReport;
export const insertNewUser = RequestService.insertNewUser;
export const signInUser = RequestService.signInUser;
export const signupUser = RequestService.signupUser;
export const getUserType = RequestService.getUserType;
export const deleteReport = RequestService.deleteReport;
export const updateUserInfo = RequestService.updateUserInfo;
export const updateReportStatus = RequestService.updateReportStatus;
export const getAllReportsSubcollection = RequestService.getAllReportsSubcollection;
export const getCount = RequestService.getCount;

export default RequestService;