import index from '../models/Index.js';

export const createUser = async (req, res) => {
    try {
        const {userName, userEmail, userBirthDate} = req.body;
        const newUser = await index.user.create({userName, userEmail, userBirthDate});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const getAllUsers = async (req, res) => {
    try{
        const users = await index.user.findAll();
        res.status(200).json(users);
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

export const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await index.user.find({where: {id}});
        if (user){
            res.status(200).json(user);
        } else{
            res.status(404).json({error: "User not found"});
        }
    } catch (error){
        res.status(400).json({error: error.message})
    }
};

export const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {userName, userEmail, userBirthDate} = req.body;
        const user = await index.user.find({where: {ide}});
        if (user){
            user.userName = userName;
            user.userEmail = userEmail;
            user.userBirthDate = userBirthDate;
            await user.save();
            res.status(200).json(user);
        } else{
            res.status(404).json({error: "User not found"});
        }
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

export const deleteUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const user = await index.user.find({where: {id}});
        if (user) {
            await user.destroy({where: {ide}});
            res.status(200).json({message: "User deleted successfully"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};
