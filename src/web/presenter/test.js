
var selectedImage
const uploadButton = document.getElementById('uploadButton')
const imageSelector = document.getElementById('imageSelector')


imageSelector.addEventListener('change', (e) => {
    selectedImage = e.target.files[0]
})

uploadButton.addEventListener('click', () => {
    if(selectedImage) {
        const formData = new FormData()
        formData.append('file', selectedImage)

        uploadImage(formData)
    }
})

async function uploadImage(imagePath) {
    try {
        console.log("image path: " + imagePath)
        const response = await axios.post(
            'http://localhost:5500/data/uploadImage',
            { imagePath: imagePath },
            { headers: { 'Content-Type': 'application/json'}}
        )
        console.log('Response', response)
    } catch(error) { console.error(error.message) }
}