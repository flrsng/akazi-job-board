import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  department: { type: String },
  description: { type: String },
  location: { type: String },
  posted: { type: Date, default: Date.now },
  deadline: { type: Date }
}, { timestamps: true });

export const Job = mongoose.model('Job', jobSchema);
