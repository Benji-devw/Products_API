const express = require('express')

const NewHomeCtrl = require('../controllers/newHome-ctrl')

const router = express.Router()

router.post('/newHome', NewHomeCtrl.createNewHome)
router.put('/newHome/:id', NewHomeCtrl.updateNewHome)
router.delete('/newHome/:id', NewHomeCtrl.deleteNewHome)
router.get('/newHome/:id', NewHomeCtrl.getNewHomeById)
router.get('/newsHome', NewHomeCtrl.getNewsHome)

module.exports = router
