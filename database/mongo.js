// conexión a la BD utilizando mongoose.
const {connect} = require('mongoose');
uri = `mongodb+srv://pets-petite:${process.env.PASSWORD}@cluster0.stxmk.mongodb.net/${process.env.DBNAME}`;

connect(uri)
    .then(()=>console.log("Base de datos conectada"))
    .catch(e =>console.log(e));