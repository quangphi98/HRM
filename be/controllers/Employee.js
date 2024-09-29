import Employee from "../models/Employee.js";
import Department from '../models/Department.js';
import Position from '../models/Position.js';

export const updateInfor = async (req, res, next) => {
    try{
        await Employee.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).send("Cập nhật thành công");
    }
    catch(err){
        next(err);
    }
}

export const deleteInfor = async (req, res, next) => {
    try{
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).send("Tào khoản đã bị xóa");
    }
    catch(err){
        next(err);
    }
}

export const getAllInfor = async (req, res, next) => {
    try{

        const allInfor = await Employee.find().populate('position_id', 'name description')  
                                              .populate('department_id', 'department_name description');
        res.status(200).send(allInfor);
    }
    catch(err){
        next(err);
    }
}

export const getInfor = async (req, res, next) => {
    try{
        const infor = await Employee.findById(req.params.id).populate('position_id', 'name description')  
                                                            .populate('department_id', 'department_name description');
        res.status(200).send(infor);
    }
    catch(err){
        next(err);
    }
}

