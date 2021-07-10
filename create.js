const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/anmol', {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log('Connected')})
.catch((err)=>{console.log(err)})


const scheme_data = mongoose.Schema({ 
    name:String,
    age:Number,
})

var data = mongoose.model('user_info', scheme_data);

const fun = async () => {
const result = await data.insertMany({
    name:'Anmol Mehra',
    age : 19
})}
fun()