const mongoose=require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/usercrudapp").then(()=>{
//     console.log("*******succesfullly connected  to database******");
// }).catch((e)=>{
//     console.log(e);
// })

// mongoose.connect("mongodb+srv://suneetkatoch7:Suneet@123@cluster0.a5hqz4h.mongodb.net/usercrudskapp?retryWrites=true&w=majority").then(()=>{
//     console.log("connected successfully")
// }).catch((err)=>{
//     console.log(err);
// })
mongoose.connect("mongodb+srv://suneetkatoch:Suneet123@cluster0.cskfz.mongodb.net/myFirstDatabase1?retryWrites=true&w=majority").then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err);
})




const Schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String

})

const Usermodel = mongoose.model("User",Schema);

module.exports =Usermodel;


