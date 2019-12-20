const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


var Student = new mongoose.Schema({
    student_id:{
        type:String,
        required:'student id cant be empty'  
    },
    Year:{
        type:String,
        required:'Class cant be empty'
    },
    Roll_no:{
        type:Number,
        required:'Roll no. cant be empty'
    },
    Batch:{
        type:Number,
        required:'Batch cant be empty'
    },
    Division:{
        type:String,
        required:'Division cant be empty'
    },
    Phone_no:{
        type:String,
        required:'Phone_no cant be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    Name: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    
});

var Teacher=new mongoose.Schema({
    teacher_id:{
        type:String,
        required:'Student id cant be empty'
    },
    Role:{
        type:[],
        required:'Role cant be empty'
    },
    Year:{
        type:[],
        required:'Class cant be empty'
    },
    Batch:{
        type:[],
        required:'Batch cant be empty'
    },
    Division:{
        type:[],
        required:'Division cant be empty'
    },
    Phone_no:{
        type:String,
        required:'Phone_no cant be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    Name: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    Subject:{
        type:[],
        required:'Class cant be empty'
    },
});

//methods
Student.methods.verifyPassword = function (password) {
    console.log(password,this.password);
    if (password==this.password)
    return true;
    else
    return false;
};

Teacher.methods.verifyPassword = function (password) {
    console.log(password,this.password);
    if (password==this.password)
    return true;
    else
    return false;
};

Student.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

Teacher.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}


mongoose.model('Student',Student);
mongoose.model('Teacher',Teacher);