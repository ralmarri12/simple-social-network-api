const { signin } = require('./auth-helpers')

module.exports = async (req, res, next) => {
    try {
        const result = await signin(req.body);
        return res.json({
            data: result
        });
    } catch (error) {
        console.log(error);
        return res.json({
            error: 'unexpected error',
            message: error.message
        });
    }
};