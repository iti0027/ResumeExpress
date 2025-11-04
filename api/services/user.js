import models from '../models/index.js';

const User = models.User;

const createUser = async (req, res) => {
    try {
        const {userName, userEmail, userBirthDate} = req.body;
        const newUser = await User.create({userName, userEmail, userBirthDate});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getAllUsers = async (req, res) => {
    try{
        const users = await User.findAll();

        if(!users || users.length === 0){
            return res.status(200).json({message: "Nenhum usuário cadastrado"});
        }
        res.status(200).json(users);
    } catch (error){
        console.log(error)
        res.status(400).json({error: error.message});
    }
};

const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.find({where: {id}});
        if (user){
            res.status(200).json(user);
        } else{
            res.status(404).json({error: "User not found"});
        }
    } catch (error){
        res.status(400).json({error: error.message})
    }
};

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {userName, userEmail, userBirthDate} = req.body;
        const user = await User.find({where: {id}});
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

const deleteUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.find({where: {id}});
        if (user) {
            await user.destroy({where: {id}});
            res.status(200).json({message: "User deleted successfully"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export {createUser, getAllUsers, getUserById, updateUser, deleteUser};