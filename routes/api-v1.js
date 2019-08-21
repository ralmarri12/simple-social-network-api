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
// #endregion
module.exports = router;