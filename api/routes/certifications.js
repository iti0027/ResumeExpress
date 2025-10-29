import {Router} from 'express';
import {
    createCertification,
    getAllCertifications,
    getCertificationById,
    updateCertification,
    deleteCertification
} from '../services/certifications.js';

const router = Router();

router.post('/certifications', createCertification);
router.get('/certifications', getAllCertifications);
router.get('/certifications/:id', getCertificationById);
router.put('/certifications/:id', updateCertification);
router.delete('/certifications/:id', deleteCertification);

export default router;