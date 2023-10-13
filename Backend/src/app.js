const express= require('express');
const  morgan= require('morgan');
const  cors=require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

//Conexion DB Local
/* const uri = 'mongodb://localhost:27017/myapp'; */
//hola
//Conexion DB nubr
const uri = 'mongodb+srv://user:djY897cVujU5mKvR@cluster0.fjnraw6.mongodb.net/';
const options = {useNewUrlParser: true};
// Or using promises
mongoose.connect(uri, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('../routes/usuario'));
app.use('/api', require('../routes/tarea'));
app.use('/api', require('../routes/modulo'));
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});

