const mongoose = require('mongoose')

mongoose
// .connect("mongodb+srv://mode_dev:Benben1337@vallena.aw6sr.mongodb.net/vallena?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .connect('mongodb://0.0.0.0:27017/vallena', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(e => {
        console.error('Connection error', e.message)
        // console.log('Connexion à MongoDB échouée !'))
    })

const db = mongoose.connection

module.exports = db