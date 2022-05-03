const express = require('express')
const { get } = require('http')
const app = express()

app.get('/', function (req, res) {
  res.json({message:'Hello Cypress Discovery'})
})

   app.get('/avengers', function (req, res){
    var avengers = ['Tony Stark', 'Clint Barton', 'Steve Rogers', 'Natasha Romanoff', 'Bruce Banner' , 'Scot Lang']
    return res.json({data: avengers})   
})

  app.get('/cnh', function (req, res){
    const idade = req.query.idade
    
    if(!idade) {
       return res.json({ message: 'Idade é um campo obrigatório.'})
   
    }
    
    
     var idadeNum = parseInt(idade)
 
 
     if (idadeNum >= 18) {
         return res.json({ message: 'Você está apto para tirar sua CNH.'})
     }
 
     else if (idadeNum > 4) {
         return res.json({ message: 'Você é menor de idade, por enquanto vá de bike.'})
     }
 
     else {
         return res.json({ message: 'Melhor ir de velotrol.'})
     }



  })

app.listen(3000)