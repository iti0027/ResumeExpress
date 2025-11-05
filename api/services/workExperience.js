import models from '../models/index.js';

const WorkExperience = models.WorkExperience;

const createWorkExperience = async (req, res) =>{
    const {WorkExperience} = req.context.models;
    try{
        const {currentJob, companyName, description, startDate, UserId} = req.body;
        const newWorkExperience = await WorkExperience.create({currentJob, companyName, description, startDate, UserId});
        res.status(201).json(newWorkExperience);
    } catch (error){
        console.log(error);
        res.status(400).json({error: error.message});
    }
};

const getAllWorkExperience = async (req, res) =>{
    const {WorkExperience} = req.context.models
    try{
        const workExperience = await WorkExperience.findAll();
        if(!workExperience ||  workExperience.length === 0){
            return res.status(200).json({message: "Nenhum trabalho cadastrado"});
        }

        res.status(200).json(workExperience);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
};

const getWorkExperienceById = async (req, res) => {
    const {WorkExperience} = req.context.models
    try{
        const {id} = req.params;
        const workExperience = await WorkExperience.findByPk(id);
        if (workExperience){
            res.status(200).json(workExperience);
        } else{
            res.status(404).json({error: "Work Experience not found"});
        }
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

const updateWorkExperience = async (req, res)=> {
    const {WorkExperience} = req.context.models
    try{
        const {id} = req.params;
        console.log("update",req.body)
        const {currentJob, companyName, description, startDate} = req.body;
        const workExperience = await WorkExperience.findByPk(id);
        if (workExperience){
            workExperience.currentJob = currentJob;
            workExperience.companyName = companyName;
            workExperience.description = description;
            workExperience.startDate = startDate;
            await workExperience.save();
            res.status(200).json(workExperience);
        } else{
            res.status(404).json({error: "Work Experience not found"});
        }
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

const deleteWorkExperience = async (req, res) => {
    const {WorkExperience} = req.context.models
    try{
        const {id} = req.params;
        const workExperience = await WorkExperience.findByPk(id);
        if (workExperience){
            await workExperience.destroy();
            res.status(200).json({message: "work Experience deleted successfully"});
        }
    } catch (error){
        res.satus(400).json({error: error.message})
    }
};

export {createWorkExperience, getAllWorkExperience, getWorkExperienceById, updateWorkExperience, deleteWorkExperience};