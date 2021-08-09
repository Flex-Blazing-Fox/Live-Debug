const router = require('express').Router()
const TweetController = require('../controllers/tweetController')
const Auth = require('../middlewares/auth')

router.get(Auth.authentication)
router.post('/', TweetController.create)
router.delete('/:id', Auth.authorization, TweetController.delete)

module.exports = router;
