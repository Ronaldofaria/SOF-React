// system required
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// configure enviroment
const dotenv = require('dotenv').config();

// up server app express
const app = express();

// user developer required
const userRoute = require('./user/user.route');
const tablecodeRoute = require('./tablecode/tablecode.route');
const favorecidoRoute = require('./favorecido/favorecido.route');
const secretariaRoute = require('./secretaria/secretaria.route');
const sequencialRoute = require('./sequencial/sequencial.route');
const responsavel = require('./responsavel/responsavel.route');
const nadRoute = require('./nad/nad.route');
const ndcRoute = require('./ndc/ndc.route');

// aplication to use
app.disable('x-powered-by');
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// user developer to use
app.use('/user',userRoute);
app.use('/tablecode',tablecodeRoute);
app.use('/favorecido',favorecidoRoute);
app.use('/secretaria',secretariaRoute);
app.use('/sequencial',sequencialRoute);
app.use('/responsavel',responsavel);
app.use('/nad',nadRoute);
app.use('/ndc',ndcRoute);

// exports server
module.exports = app;