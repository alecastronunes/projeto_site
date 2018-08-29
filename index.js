const express = require('require');
const = require('')

const app = express();
app.set('view engine','ejs');

app.use('/static', express.static('static'));

app.get('',(req,res)=>{
    res.render('index');
});






app.listen(3000, ()=>{
    console.log('Servidor inicializado')
});