const express = require('express')
const path = require('path');
const app = express();

// setup static and middleware
// = automatically create url checkers for all the files in the public folder
// these are assets that the server doesn't change ever
// index.html is default root /
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     // .join works here too 
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})