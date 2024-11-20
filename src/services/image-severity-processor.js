

async function floodProcessor(p_image) {
    const modelURL = '../../services/image-models/flood/model.json'
    const metadataURL = '../../services/image-models/flood/metadata.json'

    let model = await tmImage.load(modelURL, metadataURL)
    const prediction = await model.predict(p_image)

    return getLargest(prediction)
}



function getLargest(array) {
    var largest = 0
    var name = ''

    array.forEach(element => {
        if (element.probability > largest) {
            largest = element.probability
            name = element.className
        }
    });
    return name
}