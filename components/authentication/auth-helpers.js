const UserModel = require('./../../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('json-web-token');

const signup = async (user) => {
    user.password = await hashPassword(user.password);
    const result = await UserModel.create(user);
    const token = await generateToken(result);
    return {
        token: token.value,
        name: result.name,
        email: result.email
    };
};

const hashPassword = async (password) => {
    if (password && password != '') {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    throw new Error('Password must not be empty.');
};

const generateToken = async (userObject) => {
    return await jwt.encode(process.env.TOKEN_HASH_KEY, userObject);
};

module.exports = { signup };