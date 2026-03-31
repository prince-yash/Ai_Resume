const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const resumeRoutes = require('./routes/resumeRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(morgan('dev'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'AI Resume Builder API is running' });
});

// Routes
app.use('/api/resumes', resumeRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;
