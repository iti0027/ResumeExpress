import index from '../index.js';

export const createWorkExperience = async (req, res) =>{
    try{
        const {currentJob, companyName, startDate} = req.body;
        const newWorkExperience = await index.workExperience.create({currentJob, companyName, startDate});
        res.status(201).json(newWorkExperience);
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

export const getAllWorkExperience = async (req, res) =>{
    try{
        const workExperience = await index.workExperience.findALl();
        res.status(200).json(workExperience);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
};

export const getWorkExperienceById = async (req, res) => {
    try{
        const {id} = req.params;
        const workExperience = await index.workExperience.find({where: {id}});
        if (workExperience){
            res.status(200).json(workExperience);
        } else{
            res.status(404).json({error: "Work Experience not found"});
        }
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

export const updateWorkExperience = async (req, res)=> {
    try{
        const {id} = req.params;
        const {currentJob, companyName, startDate} = req.body;
        const workExperience = await index.workExperience.find({where: {id}});
        if (workExperience){
            workExperience.currentJob = currentJob;
            workExperience.companyName = companyName;
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

export const deleteWorkExperience = async (req, res) => {
    try{
        const {id} = req.params;
        const workExperience = await index.workExperience.find({where: {id}});
        if (workExperience){
            await workExperience.destroy({where: {id}});
            res.status(200).json({message: "work Experience deleted successfully"});
        }
    } catch (error){
        res.satus(400).json({error: error.message})
    }
};

