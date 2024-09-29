import Employee from '../models/Employee.js'
import bcrypt from "bcrypt"
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
  
      const newUser = new Employee({
        ...req.body,
        password: hash,
      });
  
      await newUser.save();
      res.status(200).send("Tạo thành công");
    } catch (err) {
      next(err);
    }  
  };

export const login = async (req, res, next) => {
    try{
        let full_name = req.body.full_name,
            email     = req.body.email,
            conditions = !!full_name ? {full_name: full_name} : {email: email};
        const user = await Employee.findOne(conditions);
        if(!user) 
            return next(createError(404,"Tài khoản không chính xác"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
        if (!isPasswordCorrect)
            return next(createError(400, "MậT khẩu không chính xác!"));
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.status(200).json(user._doc);
    }
    catch(err){
        next(err);
    }
}