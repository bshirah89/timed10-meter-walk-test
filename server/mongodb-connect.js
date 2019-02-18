// const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://bshirah89:Test123@ds139775.mlab.com:39775/10-meter-walk-test');

var TestResult = mongoose.model('Todo', {
    text: {
      type: String
    },
    date: {
      type: Date
    },
    completedAt: {
        type: Number
    }
});

var newTestResults = new TestResults({
  text: 'Test!!'
})

newTestResults.save().then((doc) => {
  console.log('Saved Test Results', JSON.stringify(doc,undefined,2));
}, (e) => {
  console.log('Unable to save Test Result');
});


module.exports={TestResult: TestResult}