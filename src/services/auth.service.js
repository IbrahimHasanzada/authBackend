const userModel = require('../models/user.model')


const getUsers = async () => {
    let users = await userModel.find()
    return users
}

const register = async (params) => {
    let user = await userModel.create(params)
    await user.save()
    return user;
}

const deleteUser = async (id) => {

    const deletedUser = await userModel.findByIdAndDelete(id)

    if (!deletedUser) {
        return false
    }

    return true

}

const findUsernameOrEmail = async ({ username, email }) => {
    const result = await userModel.findOne({
        $or: [{ username }, { email }]
    });
    return result;
};




const authServices = {
    getUsers,
    register,
    deleteUser,
    findUsernameOrEmail
}

module.exports = authServices