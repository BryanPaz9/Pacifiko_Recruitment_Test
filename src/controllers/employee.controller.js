'use strict'
var Employee = require('../models/employee.model');
function test(req,res){
    console.log(req.body);
    return res.status(200).send({messsage:"Sucess"});
}

function create(req,res){
    var employeeModel = new Employee();
    var params = req.body;
    if(params.name && params.salary && params.age){
        Employee.find({
            $or:[
                {employee_name: params.name}
            ]
        }).exec((err,foundUsers)=>{
            if(foundUsers && foundUsers.length>=1){
                return res.status(500).send({message:'This employee already exist.'});
            }else{
                // Set last id +1 to employeeModel.id
                Employee.countDocuments({}, function (err, count) {
                    employeeModel.id = count+1;
                    employeeModel.employee_name = params.name;
                    employeeModel.employee_salary = params.salary;
                    employeeModel.employee_age = params.age;
                    params.image ? employeeModel.profile_image = params.image : employeeModel.profile_image = null; 
                    employeeModel.save((err,employeeSaved)=>{
                        if(err) return res.status(500).send({message:err});
                        if(employeeSaved){
                            return res.status(200).send({message:'The employee has been added to DB successful'});
                        }else{
                            return res.status(404).send({messsage:'The employee could not be saved.'})
                        }
                            
                    });
                });
            }
        });
        
        
    }else{
        return res.status(500).send({message:'Complete all required fields. Name, Salary and Age.'});
    }
}

function listAll(req,res){

}

function findById(req,res){

}

module.exports = {
    test,
    create,
    listAll,
    findById
}