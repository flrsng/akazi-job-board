import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import jobRoutes from './routes/jobRoutes.js';

dotenv.config()
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from Express & MongoDB! Now working');
});

app.get('/jobs', (req, res) => {
  res.status(200).send('List of all the jobs posted')
})

// Routes
app.use('/api/jobs', jobRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
