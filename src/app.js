const config = require('./config')
require('./config/database')
const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()

app.use(cors())

app.use(express.json())

app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Welcome to User Managment API')
})

app.listen(config.port, () => {
    console.log(`Application is running on port http://localhost:${config.port}`)
})

