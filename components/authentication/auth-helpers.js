const UserModel = require('./../../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('json-web-token');

const signup = async (user) => {
    user.password = await hashPassword(user.password);
    const userQueryResult = await UserModel.create(user);
    const token = await generateToken(userQueryResult);
    return {
        token: token.value,
        name: userQueryResult.name,
        email: userQueryResult.email
    };
};

const signin = async (user) => {

    console.log(user);

    const userQueryResult = await UserModel.findOne({
        where: {
            email: user.email
        }
    });

    if (userQueryResult) {
        if (bcrypt.compareSync(user.password, userQueryResult.password)) {
            const token = await generateToken(userQueryResult);
            return {
                token: token.value,
                name: userQueryResult.name,
                email: userQueryResult.email
            };
        }
    }

    throw new Error('Wrong user name or password');
};

const hashPassword = async (password) => {
    if (password && password != '') {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    throw new Error('Password must not be empty.');
};

const generateToken = async (userObject) => {
    
    const time = new Date();
    const clone = userObject.dataValues;
    const userObjectWithAge = Object.assign(clone, {
        age: time.getTime()
    });

    console.log("Source:")
    console.log(userObjectWithAge);
    console.log("Distination:")

    const result = await jwt.encode(process.env.TOKEN_HASH_KEY, {userObjectWithAge});
    return result;
};

module.exports = { signup, signin };