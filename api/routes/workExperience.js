import {Router} from 'express';
import {
    createWorkExperience,
    getAllWorkExperience,
    getWorkExperienceById,
    updateWorkExperience,
    deleteWorkExperience
} from '../services/workExperience.js';

const router = Router();

router.post('/work-experiences', createWorkExperience);
router.get('/work-experiences', getAllWorkExperience);
router.get('/work-experiences/:id', getWorkExperienceById);
router.put('/work-experiences/:id', updateWorkExperience);
router.delete('/work-experiences/:id', deleteWorkExperience);

export default router;