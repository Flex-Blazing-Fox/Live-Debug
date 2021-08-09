const express = require('express')
const router = express.Router()
const TweetController = require('../controllers/tweetController')
const Auth = require('../middlewares/auth')
// console.log(Auth.authentication);

router.get('/', Auth.authentication)
router.post('/', Auth.authentication, TweetController.create)
router.delete('/:id', Auth.authorization, TweetController.delete)

module.exports = router;
