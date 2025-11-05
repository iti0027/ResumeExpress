const createCertification = async (req, res) => {
    const {Certification} = req.context.models;
    try {
        const {title, startDate, endDate,UserId} = req.body;
        const newCertification = await Certification.create({title, startDate, endDate, UserId});
        res.status(201).json(newCertification);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

 const getAllCertifications = async (req, res) => {
    const {Certification} = req.context.models;
    try{
        const certifications = await Certification.findAll();

        if(!certifications || certifications.length === 0){
            return res.status(200).json({message: "Nenhum certificado cadastrado"});
        }
        
        res.status(200).json(certifications);
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

 const getCertificationById = async (req, res) => {
    const {Certification} = req.context.models;
    try{
        const {id} = req.params;
        const certification = await Certification.findByPk(id);
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
    const {Certification} = req.context.models;
    try{
        const {id} = req.params;
        const {title, startDate, endDate} = req.body;
        const certification = await Certification.findByPk(id);
        if (certification){
            certification.title = title;
            certification.startDate = startDate;
            certification.endDate = endDate;
            await certification.save();
            res.status(200).json(certification);
        } else{
            res.status(404).json({error: "Certification not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

 const deleteCertification = async (req, res) => {
    const {Certification} = req.context.models;
    try{
        const {id} = req.params;
        const certification = await Certification.findByPk(id);
        if (certification){
            await certification.destroy();
            res.status(200).json({message: "Certification deleted successfully"});
        }
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

export { createCertification, getAllCertifications, getCertificationById, updateCertification, deleteCertification};