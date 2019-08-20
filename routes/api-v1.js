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

module.exports = router;