const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema({
    email : {
        type :String,
        required :true
    },
    name : {
        type :String,
        required :true
    },
    password:{
        type : String,
        require : true
    }
})
const Storeuser = mongoose.model("storeuser",storeSchema);
module.exports = Storeuser;