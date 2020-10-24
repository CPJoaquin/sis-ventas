const app = require('./server');

app.listen(app.get('port'), () => {
    console.log('servidor trabajando');
});