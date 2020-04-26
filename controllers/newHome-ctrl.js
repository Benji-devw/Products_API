const NewHome = require('../models/newHome-model')

createNewHome = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a newHome',
        })
    }

    const newHome = new NewHome(body)

    if (!newHome) {
        return res.status(400).json({ success: false, error: err })
    }

    newHome
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: newHome._id,
                message: 'NewHome created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'NewHome not created!',
            })
        })
}

updateNewHome = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    NewHome.findOne({ _id: req.params.id }, (err, newHome) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'NewHome not found!',
            })
        }
        newHome.name = body.name
        newHome.time = body.time
        newHome.rating = body.rating
        newHome
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: newHome._id,
                    message: 'newHome updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'newHome not updated!',
                })
            })
    })
}

deleteNewHome = async (req, res) => {
    await NewHome.findOneAndDelete({ _id: req.params.id }, (err, newHome) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!newHome) {
            return res
                .status(404)
                .json({ success: false, error: `NewHome not found` })
        }

        return res.status(200).json({ success: true, data: newHome })
    }).catch(err => console.log(err))
}

getNewHomeById = async (req, res) => {
    await NewHome.findOne({ _id: req.params.id }, (err, newHome) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: newHome })
    }).catch(err => console.log(err))
}

getNewsHome = async (req, res) => {
    await NewHome.find({}, (err, newHome) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!newHome.length) {
            return res
                .status(404)
                .json({ success: false, error: `NewHome not found` })
        }
        return res.status(200).json({ success: true, data: newHome })
    }).catch(err => console.log(err))
}

module.exports = {
    createNewHome,
    updateNewHome,
    deleteNewHome,
    getNewsHome,
    getNewHomeById,
}
