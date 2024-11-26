const authServices = require("../services/auth.service");
const bcrypt = require('bcryptjs')
const getUsers = async (req, res) => {
    let users = await authServices.getUsers();
    res.json(users)
}


const register = async (req, res) => {

    const { username, password, email, gender, firstname, lastname } = req.body;

    if (!username && !password && !email) {
        return res.status(400).json({ message: "Please fill all required fields" });
    }

    const exsistingUser = await authServices.findUsernameOrEmail({ username, email })

    if (exsistingUser) {
        return res.status(409).json({ message: "Username or email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await authServices.register({ username, password: hashedPassword, email, firstname, lastname })

    if (!result) {
        return res.status(400).json({ message: "User cannot created!" });
    }

    res.json({ message: "User created successfully!" });
}

const deleteUser = async (req, res) => {

    const result = await authServices.deleteUser(req.params.id)
    if (!result) {
        return res.status(400).json({ message: 'User not found!' })
    }

    res.json({ message: 'User deleted succesfully!' })

}

const authController = {
    getUsers,
    register,
    deleteUser
}

module.exports = authController;