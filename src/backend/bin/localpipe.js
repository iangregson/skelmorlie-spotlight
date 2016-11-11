import createServer from '../lib/createServer'

const PORT = process.env.PORT || 5000

createServer({ port: PORT })
.then(() => console.log('Server started on port ', PORT))
.catch((err) => console.log('Something went wrong starting the server. ', err))

