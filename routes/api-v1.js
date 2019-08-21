const router = require('express').Router();

// #region (authentication)
const signup = require('../components/authentication/signup');
router.post('/signup', signup);

const signin = require('../components/authentication/signin');
router.post('/signin', signin);
// #endregion

module.exports = router;