import express from 'express';
import jobController from '../controllers/jobControllers.js';

const router = express.Router();

router.post('/', jobController.createJob);
router.get('/', jobController.getJobs);
router.get('/:id', jobController.getJob);
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

export default router;
