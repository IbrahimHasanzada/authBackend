const loginServices = require("../services/login.service");
const loginUser = async (req, res) => {
    const { password, email } = req.body;
    if ( !password && !email) {
        return res.status(400).json({ message: "Please fill all required fields" });
    }

    const result = await loginServices.loginUser({password, email})

    if (!result) {
        return res.status(400).json({ message: 'User not found!' })
    }

    res.status(200).json({message: 'User succesfully login!', result})

}


const loginControllers = {
    loginUser
}

module.exports = loginControllers