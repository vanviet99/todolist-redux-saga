const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todolist');

const productSchema = mongoose.Schema({
    name:{
        type : String,
        trim : true
    }
},{collection :'product'})

const productModal = mongoose.model('product', productSchema)
productSchema.index({'$**': 'text'});
module.exports = productModal