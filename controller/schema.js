const Mongoose  = require("mongoose");

const user = new Mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    father:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    }
});
module.exports = Mongoose.model('userDetails',user);