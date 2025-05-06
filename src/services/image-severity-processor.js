class ImageSeverityProcessor {
    static async floodProcessor(p_image) {
        const modelURL = '../../services/image-models/flood/model.json';
        const metadataURL = '../../services/image-models/flood/metadata.json';

        const model = await tmImage.load(modelURL, metadataURL);
        const prediction = await model.predict(p_image);

        return this.getLargest(prediction);
    }

    static getLargest(array) {
        let largest = 0;
        let name = '';

        array.forEach(element => {
            if (element.probability > largest) {
                largest = element.probability;
                name = element.className;
            }
        });

        return name;
    }
}

export const floodProcessor = ImageSeverityProcessor.floodProcessor;
export const getLargest = ImageSeverityProcessor.getLargest;
