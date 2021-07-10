const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/data', {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log('Connected')})
.catch((err)=>{console.log(err)})


const scheme_data = mongoose.Schema({ 
    name:String,
    age: Number,
})

var data = mongoose.model('user_info', scheme_data);

const fun = async () => {
const result = await data.deleteOne({age:19})
console.log(result)
}
fun()