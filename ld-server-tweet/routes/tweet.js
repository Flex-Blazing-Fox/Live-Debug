const router = require('express').Router()
const TweetController = require('../controllers/tweetController')
const Auth = require('../middlewares/auth')

router.use(Auth.authentication)
router.post('/', TweetController.create)
router.use(Auth.authorization)
router.delete('/:id',TweetController.delete)

module.exports = router;
