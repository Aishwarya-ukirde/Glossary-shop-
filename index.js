const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require("dotenv").config()

const app=express()
app.use(cors())
app.use(express.json({limit:"10mb"}))

const PORT=process.env.PORT ||8080

console.log(process.env.MONGODB_URL)
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to the database"))
  .catch((err) => {
    console.error("Error connecting to the database:", err);
    res.status(500).send("Internal Server Error");
  });

    


//schema
const userSchema=mongoose.Schema({
    firstName:String,
        lastName:String,
        email:{
            type:String,
            unique:true,
        },
        password:String,
        confirmPassword:String,
        image:String
})
const userModel=mongoose.model("user",userSchema)

app.get("/",(req,res)=>{
    res.send("server is running")
})

app.post("/signup", async(req,res)=>{
    console.log(req.body)
    const {email}=req.body

    userModel
    .findOne({ email: email })
    .then((result) => {
      console.log(result);
      if (result) {
        res.send({ message: "Email id is already taken",alert:false });
      } else {
        const data = userModel(req.body);
        data.save();
        res.send({ message: "Registration success",alert:true });
      }
    })
    .catch((err) => console.log(err));
})



//login api
app.post("/login",(req,res)=>{
    console.log(req.body)
  const {email}=req.body
  userModel.findOne({email:email}).then((result)=>{
    if(result)
    {
      console.log(result)
      const datasend={
        _id:result._id,
        firstName:result.firstName,
        lastName:result.lastName,
        email:result.email,
        image:result.image
        
        
      }
      res.send({message:"Login is successfully",alert:true,data:datasend})
      console.log(datasend)
    }
    else{
      res.send({message:"this email id is not available",alert:false})
    }
  })
})


//product schema
const schemaProduct=mongoose.Schema({
  name:String,
  category:String,
  image:String,
  price:String,
  description:String

})
const productModel=mongoose.model("products",schemaProduct)

app.post("/uploaddata", async(req,res)=>{
  console.log(req.body)
  const data=await productModel(req.body)
  const dataSave=await data.save()
  
  res.send({message:'upload succesfully'})


})

app.get("/product",async(req,res)=>{

  const data=await productModel.find({})
  res.send(JSON.stringify(data))
})
3

app.listen(PORT,()=>console.log("server is running at port: "+ PORT ))


// const data= await User.findOne({email:req.body.email})
//     if(data){
//         resp.send({message:'Email id is already taken'})
//     }else{
//         const user=new User(req.body)
//         let Result=await user.save()
//         resp.send({Result,message:'registration done'})
//     }
