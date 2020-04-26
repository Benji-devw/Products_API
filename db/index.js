const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/protectorat', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db