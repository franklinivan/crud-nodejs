// conexión a la BD utilizando mongoose.
const {connect} = require('mongoose');
uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.stxmk.mongodb.net/${process.env.DBNAME}`;

connect(uri)
    .then(()=>console.log('Database connected.'))
    .catch(e =>console.log(e));