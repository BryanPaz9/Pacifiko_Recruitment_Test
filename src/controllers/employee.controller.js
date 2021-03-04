'use strict'
var Employee = require('../models/employee.model');

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
                        if(err) return res.status(500).send({message:'Error in the request.'});
                        if(!employeeSaved) return res.status(404).send({messsage:'The employee could not be saved.'})
                            return res.status(200).json({
                                status: 'sucess',
                                message:'The employee has been added to DB successful. Your user id is: '+employeeSaved.id
                            });
                    });
                });
            }
        });
        
        
    }else{
        return res.status(500).send({message:'Complete all required fields. Name, Salary and Age.'});
    }
}

function listAll(req,res){    
    Employee.find({}).exec((err,data)=>{
        if(err) return res.status(500).send({message:'Error in the request.'});
        if(!data || data.length == 0) return res.status(404).send({message:'No data found'});
        return res.status(200).json({
            status: 'sucess',
            data: data   
        });
    })
}

function findById(req,res){
    var employeeId = req.params.id;
    Employee.findOne({id:employeeId},(err,data)=>{
        if(err) return res.status(500).send({message:'Error in the request.'});
        if(!data || data.length ==0) return res.status(404).send({messsage:'No data found'});
        return res.status(200).json({
            status:'sucess',
            data:data
        });
    })
}

//know how many employees have a salary greater than or equal :salary
function getHMEmployeesGTESalary(req,res){
    var salary = req.params.salary;
    Employee.count({employee_salary:{$gte:salary}}).exec((err,data)=>{
        if(err) return res.status(500).send({message:'Error in the request.'});
        if(!data || data.length == 0) return res.status(404).send({message:'No data found'});
        return res.status(200).json({
            status: 'sucess',
            message: 'The number of employees whose salary is greater than $'+salary+' is: '+data   
        });
    })
}

module.exports = {
    create,
    listAll,
    findById,
    getHMEmployeesGTESalary
}