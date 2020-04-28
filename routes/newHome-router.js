const express = require('express')
const router = express.Router()

const NewHomeCtrl = require('../controllers/newHome-ctrl')

router.post('/newHome', NewHomeCtrl.createNewHome)
router.put('/newHome/:id', NewHomeCtrl.updateNewHome)
router.delete('/newHome/:id', NewHomeCtrl.deleteNewHome)
router.get('/newHome/:id', NewHomeCtrl.getNewHomeById)
router.get('/newsHome', NewHomeCtrl.getNewsHome)

module.exports = router
