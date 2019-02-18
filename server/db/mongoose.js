// const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://bshirah89:Test123@ds139775.mlab.com:39775/10-meter-walk-test');


module.exports = {mongoose}