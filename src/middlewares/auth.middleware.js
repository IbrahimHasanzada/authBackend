const jwt = require('jsonwebtoken')

const authRegister = (scheme) => {
    return (req, res, next) => {
        let result = scheme.validate(req.body)
        if (result.error) {
            return res
                .status(400)
                .json({ error: result.error?.details?.[0]?.message });
        }
        next()
    }
}

// const authToken = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json('Unauthorized');
//     }

//     const token = authHeader.split(' ')[1];

//     if (!token) {
//         return res.status(401).json('Unauthorized');
//     }

//     const secret = process.env.JWT_SECRET;

//     try {
//         const decoded = jwt.verify(token, secret);
//         req.userId = decoded.userId;
//         next();
//     } catch (error) {
//         return res.status(401).json('Unauthorized');
//     }
// };


const authMidlleware = {
    authRegister,
    // authToken
}

module.exports = authMidlleware