const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/',(req, res) => {
    res.send('Hello')
})
//post /test 
app.post('/test', (req, res) => {
    let data = req.body;
    console.log('data:', data)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))