const mongoose = require('mongoose');

const taskDB = (url) => {
    return mongoose.connect(url, {
      useNewUrlParser: true,
    });
}

module.exports = taskDB;