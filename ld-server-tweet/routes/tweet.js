const express = require('express')
const router = express.Router()
const TweetController = require('../controllers/tweetController')
const Auth = require('../middlewares/auth')

router.use(Auth.authentication)
router.post('/', TweetController.create)
router.use(Auth.authorization)
router.delete('/:id', Auth, TweetController.delete)

module.exports = router;
