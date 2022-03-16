const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express,json());

const connect = ()=>{
    return mongoose.connect("mongodb+srv://shubham123:12Shubh34@cluster0.zenet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

};

// UserSchema
//step 1 :creating a UserSchema
const userSchema = new mongoose.Schema(
    {
        firstName:{type:String, required:true},
        lastName:{type:String, required:true},
        gender:{type:String, required:true},
        dateOfBirth:{type:Date, required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },

    },
    {
        timestamps:true,
        versionKey:false,
    },
);
//step 2:Model
const User = mongoose.model('user',userSchema);

//StudentSchema
//Step1:create Schema
const StudentSchema = new mongoose.Schema({
    rollid:{type:Number, required:true},
    currentBatch:{type:String, required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
},
{
  timestamps:true,
  versionKey:false,  
})

//step2:create Model
const Student = mongoose.model('student',StudentSchema )

//BatchSchema
//Step1:createSchema
const batchSchema = new mongoose.Schema({
    batchName:{type:String, required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
},
{
    timestamps:true,
    versionKey:false,
})
//step2:create Model
const Batch = new mongoose.model('batch',batchSchema)

//EvalSchema;
//craete evalSchema
const evalSchema = new mongoose.Schema({
    date_of_evaluation:{type:Date, required:true},
    instructor:{type:String, required:true},
    batch_id:{type:Number, required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
},
{
    timestamps:true,
    versionKey:false,
})
//crete model
const Eval = new mongoose.model('eval',evalSchema);

//SubmissionSchema
//create a new submissionSchema
const submissionSchema = new mongoose.Schema({
    mark:{type:Number, required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    student_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    evaluation_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required:true,
    },
},
{
    timestamps:true,
    versionKey:false,
})

app.listen(5000,()=>{
    try {
      return connect()  
    } catch (error) {
        console.log("eror",error)
    }
})