const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var TestResults = require('./model/TestResult');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.get('/',(req, res) => {
//     res.send('Hello')
// })

//post /test 
app.post('/testResults', (req, res) => {
    var newTestResults = new TestResults({
        text: req.body.testResults,
        date: req.body.date
    })
    newTestResults.save().then((doc) => {
        console.log('Saved Test Results', JSON.stringify(doc,undefined,2));
        res.send(doc)
      }, (e) => {
        res.send(e)
        console.log('Unable to save Test Result');
      });
    console.log('data:', data)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))