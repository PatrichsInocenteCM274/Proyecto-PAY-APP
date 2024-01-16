const app = require('./config/server');

require('./app/routes/methods')(app);

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});