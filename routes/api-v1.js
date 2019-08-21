const router = require('express').Router();

// #region (playground)
router.get('/playground', (req, res, next) => {
    return res.json({
        result: 'it works!'
    });
});

router.post('/playground', (req, res, next) => {
    return res.json({
        result: 'it works!',
        body: req.body
    });
});
// #endregion

// #region (authentication)
const signup = require('../components/authentication/signup');
router.post('/signup', signup);

const signin = require('../components/authentication/signin');
router.post('/signin', signin);
// #endregion
module.exports = router;