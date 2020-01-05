const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./DB.js');
require('./models/User');
const app = express();


mongoose.Promise = global.Promise;
mongoose.connect( config.DB, { useNewUrlParser: true }).then(
    () => {console.log(`Database is connected`) },
    err => { console.log('Can not connect to the database'+ err)}
  );

app.use(bodyParser.json());
app.use(cors());

 require('./routes/userRegisterationRoute')(app);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`app running on ${PORT}`);
});


