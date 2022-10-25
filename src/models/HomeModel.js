const mongoose = require('mongoose');

const HomeSCHEMA= new mongoose.Schema({
    titulo:{ type: String , required: true },
    descricao: String

})

const HomeModel = mongoose.model('Home',HomeSCHEMA);

class Home {

}


module.exports=Home;