import User from "../models/User.js";

export const getUser = async (req, res, next) => {
    try{

        const user = await User.findById(req.params.id);
        res.status(200).json(user);

    } catch(error){

        next(error);
    }
}

export const getAllUsers = async (req, res, next) => {
    try{

        const users = await Cabin.find();
        res.status(200).json(users);

    } catch(error){

        next(error);
    
    }
}