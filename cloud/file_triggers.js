const ParseImage = require('./node_modules/parse-cloud-image')

Parse.Cloud.beforeSaveFile(async (request) => {
    const image = await ParseImage.ParseImage.from(request.file)
    return image.resize(1024)
})
