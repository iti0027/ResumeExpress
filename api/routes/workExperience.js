import {Router} from 'express';
import {
    createWorkExperience,
    getAllWorkExperience,
    getWorkExperienceById,
    updateWorkExperience,
    deleteWorkExperience
} from '../services/workExperience.js';

const router = Router();

router.post('/', createWorkExperience);
router.get('/', getAllWorkExperience);
router.get('/:id', getWorkExperienceById);
router.put('/:id', updateWorkExperience);
router.delete('/:id', deleteWorkExperience);

export default router;