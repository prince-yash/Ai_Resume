const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
const clientUrl = process.env.CLIENT_URL?.replace(/\/$/, ''); // Remove trailing slash
const allowedOrigins = [
  'https://ai-resume-1-g435.onrender.com',
  clientUrl,
  'http://localhost:3000',
  'http://localhost:5000'
].filter(Boolean);

console.log('✅ CORS allowed origins:', allowedOrigins);
console.log('📝 CLIENT_URL env var:', process.env.CLIENT_URL);

app.use(cors({
  origin: (origin, callback) => {
    console.log('🔍 Incoming request origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(morgan('dev'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'AI Resume Builder API is running' });
});

// Routes
app.use('/api/auth', authRoutes);
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
