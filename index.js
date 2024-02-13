//get, post, patch, delete

const express =require('express')
const app = express()
app.listen(3050)
app.use(express.json())
let frutas = [
    {id:1,nombre:"mango",tipo:"huesudo"},
    {id:2,nombre:"naranja",tipo:"citrico"}
]


app.get('/', (req, res) => {
    res.send('hola mundo');
  })
  app.get('/list', (req, res) => {
    res.send(frutas)
  })
/* para hacer post en postman lo agregamos como raw e introducimos el objeto como un json
ejemplo>
{
    "id":2,
    "nombre":"manzana",
    "tipo":"fibroso"
}
para el metodo put es lo mismo 
y para el metodo patch es casi lo mismo solo que se puede enviar solo el nombre y el tipo
*/
app.post('/add', (req, res) =>{
    var body = req.body
    
    frutas.push(body)
    console.log(body)

    res.send("se agrego el siguiente elemento \n" +body.id + body.nombre + body.tipo)
})
app.put('/replace:id',(req,res)=>{
    const newBody=req.body
    const id=req.params.id
    const index=frutas.findIndex(x => x.id==id)

    frutas[index]=newBody
    
    res.send(frutas)
})
app.patch('/mod:id',(req,res)=>{
    const info=req.body
    const id=req.params.id
    const index=frutas.findIndex(x => x.id==id)

    Object.assign(frutas[index],info)
    
    res.send(frutas)
})

app.delete('/del:id',(req,res)=>{
    
    const id=req.params.id
    const index=frutas.findIndex(x => x.id==id)

    frutas.splice(index,1)
    
    res.send(frutas)
})