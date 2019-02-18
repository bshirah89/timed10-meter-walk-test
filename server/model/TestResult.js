var mongoose = require('mongoose');

var TestResult = mongoose.model('Todo', {
    text: {
      type: String,
      required: true
    },
    date: {
      type: Date
    },
    completedAt: {
        type: Number
    }
});
module.exports = {TestResult};