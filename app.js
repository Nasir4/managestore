// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse()
// }

require('dotenv').config();

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRoutes = require('./routes/index');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use('/', indexRoutes);

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(()=>{console.log('connection successfully')})
.catch((err)=>{console.log('having some problem ', err)})


app.listen(process.env.PORT || 3000, () => {
    console.log('app runing on 3000')
})