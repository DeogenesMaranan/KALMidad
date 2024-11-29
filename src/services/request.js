
export async function getUserInfo(p_uid) {
    try {
        const response = await axios.get(
            'http://localhost:5500/users/getUserInfoById', {
                params: {
                    document: 'users-credential',
                    uid: p_uid,
                },
                headers: { 'Content-Type': 'application/json' },
            }
        )
        return response
    } catch(error) { throw error }
}

export async function insertUserInfo(p_user, p_uid) {
    try {
        const response = await axios.post(
            'http://localhost:5500/users/insertUserInfo', {
                uid: p_uid,
                firstname: p_user.firstname, 
                middlename: p_user.middlename, 
                lastname: p_user.lastname,
                town: p_user.town,
                city: p_user.city,
                userType: p_user.userType,
            },
            { headers: { 'Content-Type': 'application/json' },}
        )
        return response
    } catch(error) { throw error }
}

export async function getAllUserReport(p_uid) {
    try {
        const response = await axios.get(
            'http://localhost:5500/data/getAllUserReports', {
                params: {
                    document: 'report',
                    uid: p_uid,
                    subcollection: 'userReport',
                },
            },
        )
        return response
    }
    catch(error) { throw error }
}

export async function uploadImage(selectedImage) {
    try {
        const formData = new FormData()
        formData.append('image', selectedImage)

        const response = await axios.post(
            'http://localhost:5500/data/uploadImage', formData,
            { headers: { 'Content-Type': 'multipart/form-data', }}
        )
        return response
    } 
    catch (error) { throw error }
}

export async function insertReport(p_report, p_uid) {
    try {
        const response = await axios.post(
            'http://localhost:5500/data/insertReport', {
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
            },
            { headers: { 'Content-Type': 'application/json', }}
        )
        return response
    }
    catch(error) { throw error }
}

export async function insertNewUser(p_uid) {
    try {
        const response = await axios.patch(
            'http://localhost:5500/users/insertNewUser', {
                uid: p_uid,
            },
            { headers: { 'Content-Type': 'application/json', }}
        )
        return response
    }
    catch(error) { throw error }
}

export async function signInUser(p_email, p_password, recaptchaToken) {
    try {
        const response = await axios.post(
            'http://localhost:5500/users/signin', 
            { p_email, p_password, recaptchaToken, }, 
            { headers: { 'Content-Type': 'application/json', }}
        )

        if (response.data && response.data.message) {
            return response
        }
    } catch(error) { throw error }
}

export async function signupUser(p_email, p_password, recaptchaToken) {
    try {
        const response = await axios.post(
            'http://localhost:5500/users/signup',
            { p_email, p_password, recaptchaToken },
            { headers: { 'Content-Type': 'application/json' }}
        ) 
        return response 
    } catch (error) { throw error }
}

export async function getUserType(uid) {
    try {
        const response = await axios.get(
            'http://localhost:5500/users/getUserType',  {
                params: {
                    uid: uid,
                },
                headers: {'Content-Type': 'application/json', },
            }
        )
        return response
    }
    catch (error) { throw error}
}

export async function deleteReport(p_uid, p_imageLink, p_subcollection) {
    try {
        const response = await axios.delete(
            'http://localhost:5500/data/deleteReport', 
            {
                headers: { 'Content-Type': 'application/json' },
                data: {
                    uid: p_uid,
                    imageLink: p_imageLink,
                    subcollection: p_subcollection,
                },
            }
        );
        return response;
    } catch (error) {
        console.error("Error in deleteReport:", error);
        throw error;
    }
}

export async function updateUserInfo(data) {
    try {
        const response = await axios.patch( 
            'http://localhost:5500/users/updateUserInfo',
            data,
            { headers: { 'Content-Type': 'application/json' }, } 
        )
        return response
    }
    catch(error) {
        throw new Error('Error updating data:', error)
    }
}

export async function updateReportStatus(uid, reportId, status) {
    try {
        const response = axios.patch(
            'http://localhost:5500/data/updateReportStatus', {
                uid, reportId, status,
            },
            { header: { 'Content-Type': 'application/json' }, }
        )
        return response
    }
    catch (error) { throw error }
}

export async function getAllReportsSubcollection() {
    try {
        const response = await axios.get(
            'http://localhost:5500/data/getAllReportsSubcollection',
            { headers: { 'Content-Type': 'applicatio/json' }, }
        )
        return response
    }
    catch(error) { throw error }
}