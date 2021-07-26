const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')

router.post('/createnewsPost',postCtrl.createNewsPost)

router.get('/allPost',postCtrl.allPost)

module.exports = router