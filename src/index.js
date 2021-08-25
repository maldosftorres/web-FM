const express = require('express');
const path = require('path');

//server
const app = express();

//Settings
//Port
app.set('port', process.env.PORT || 8080);

//Views
app.set('views', path.join(__dirname, 'views'));

//Render html to ejs
app.engine('html', require('ejs').renderFile);

//view to ejs
app.set('view engine', 'ejs');

//Routes
app.use(require('./routes/route'));

//Public static file
app.use(express.static(__dirname + '/public'));

//Server response in consola
app.listen(app.get('port'), () => {
    console.log('Open Server in port', app.get('port'));
})