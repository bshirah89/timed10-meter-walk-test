const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://bshirah89:Mia92214!@cluster0-shard-00-00-duqwd.mongodb.net:27017,cluster0-shard-00-01-duqwd.mongodb.net:27017,cluster0-shard-00-02-duqwd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', (err, db) =>{
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    db.close();
});