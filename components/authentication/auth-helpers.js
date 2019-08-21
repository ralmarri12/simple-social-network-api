const UserModel = require('./../../models').User;

const signup = async (user) => {
    return UserModel.create(user);
}


module.exports = { signup };