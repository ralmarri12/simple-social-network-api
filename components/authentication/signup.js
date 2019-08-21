const { signup } = require('./auth-helpers')
module.exports = async (req, res, next) => {
    try {
        const result = await signup(req.body);
        return res.json({
            data: result
        });
    } catch (error) {
        return res.json({
            error: 'unexpected error',
            message: error.message
        });
    }
};