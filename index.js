const express = require('express');
const votacoes = require('./data/votacao.json');
const fs = require ('fs');



const app = express();
app.set('view engine','ejs');

app.use('/static', express.static('static'));



app.get('',(req,res)=>{
    res.render('index');
});

app.post('', (req, res) => {
    let string = `Votação: ${req.body.emoji} \n Por que: ${req.body.porque}  \n`;

    fs.writeFile('votacao.txt', string, {flag: 'a'}, (err) => {
        res.render('vontacao');
    });
});

app.get('/votacao', (req,res)=>{
    res.render('votacao', {'votacoes': votacoes});//'votacoes' - variavel | votacoes = local
});





app.listen(3000, ()=>{
    console.log('Servidor inicializado')
});