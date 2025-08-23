import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import jobRoutes from './routes/jobRoutes.js';
import cors from "cors";

dotenv.config()
const app = express();
app.use(express.json());
const PORT = 4000;
app.use(cors({
  origin: "http://localhost:5173"
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from Express & MongoDB! Now working');
});

// Routes
app.use('/api/jobs', jobRoutes);

// 404 handler (keep this after all other routes)
app.use((req, res, next) => {
  res.status(404).send("404 - Not Found");
});

// Optional: error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

