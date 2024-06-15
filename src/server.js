const App = require('./app')
require('dotenv').config()
const PORT = process.env.PORT || 3000

const server = new App()
server.start(PORT)


