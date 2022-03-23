const { MongoClient, ServerApiVersion } = require('mongodb');

const MONGODB_URL = 'mongodb+srv://mewtwo:mewtwo123@cluster0.bwibg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const DB_NAME = 'mewtwo-database';

const connection = () =>
  MongoClient.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit();
    });

module.exports = connection;
