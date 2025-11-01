import {Router} from 'express';
import {
    createCertification,
    getAllCertifications,
    getCertificationById,
    updateCertification,
    deleteCertification
} from '../services/certifications.js';

const router = Router();

router.post('/', createCertification);
router.get('/', getAllCertifications);
router.get('/:id', getCertificationById);
router.put('/:id', updateCertification);
router.delete('/:id', deleteCertification);

export default router;