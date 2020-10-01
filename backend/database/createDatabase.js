const mongoose = require('mongoose')
const glob = require('glob')
const path = require('path')
require('dotenv').config();

module.exports = ({ logger }) => {

    mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    });

    const db = glob.sync('./schemas/**/*.js', { cwd: __dirname })
    .map(filename => {
        return {
            schema: require(filename),
            name: path
                .basename(filename)
                .replace(path.extname(filename), ''),
        }
    })
    .map(({name, schema}) => mongoose.model(name, schema))
    .reduce((db, model) => {
        return {
            ...db,
            [model.modelName]: model,
        }
    }, {})
    
    mongoose
    .connection
    .on('error', error => {
        throw error
    })
    .once('open', () => logger.info(`Nice! MongoDB connection established successfully!`) && 
        console.log("Nice! MongoDB connection established successfully!"))

    return db
}