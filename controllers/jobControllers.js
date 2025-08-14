// controllers/jobControllers.js
import { Job } from '../models/jobModels.js';

// Create a new job
const createJob = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single job by ID
const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a job
const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a job
const deleteJob = async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Export all controller functions
export default {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob
};

