//ctrl } = Multiline comment
let express = require('express');
let exphbs = require('express-handlebars')
let app  = express();
let appRoutes = require('./routing/router')

const extNameHbs= 'hbs'
let hbs = exphbs.create({extname: extNameHbs});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.use('/',appRoutes)
app.listen(3000,()=>{
    console.log('App Listening on port 3000: (http://localhost:3000)')
});