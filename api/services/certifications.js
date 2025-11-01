import models from "../models/index.js";

const Certification = models.Certification;

const createCertification = async (req, res) => {
    try {
        const {certificate1, certificate2, certificate3} = req.body;
        const newCertification = await Certification.create({certificate1, certificate2, certificate3});
        res.status(201).json(newCertification);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

 const getAllCertifications = async (req, res) => {
    try{
        const certifications = await Certification.findAll();
        res.status(200).json(certifications);
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

 const getCertificationById = async (req, res) => {
    try{
        const {id} = req.params;
        const certification = await Certification.find({where: {id}});
        if (certification){
            res.status(200).json(certification);
        } else{
            res.status(404).json({error: "Certification not found"});
        }
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

 const updateCertification = async (req, res) => {
    try{
        const {id} = req.params;
        const {certificate1, certificate2, certificate3} = req.body;
        const certification = await Certification.find({where: {id}});
        if (certification){
            certification.certificate1 = certificate1;
            certification.certificate2 = certificate2;
            certification.certificate3 = certificate3;
            await certification.sava();
        } else{
            res.status(404).json({error: "Certification not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

 const deleteCertification = async (req, res) => {
    try{
        const {id} = req.params;
        const certification = await Certification.find({where: {id}});
        if (certification){
            await certification.destroy({where: {id}});
            res.status(200).json({message: "Certification deleted successfully"});
        }
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

export { createCertification, getAllCertifications, getCertificationById, updateCertification, deleteCertification};