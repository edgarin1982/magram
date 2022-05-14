const express = require('express');
const app = express();

//body.parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));



app.listen(3001, () => {
    console.log(`Express on port 3001`);
  });








//productos
//comentarios
//users
