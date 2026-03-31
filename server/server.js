require('dotenv').config();

const app = require('./app');
const connectDatabase = require('./src/config/database');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });

    const shutDown = (signal) => {
      console.log(`${signal} received: closing server`);
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    };

    process.on('SIGINT', () => shutDown('SIGINT'));
    process.on('SIGTERM', () => shutDown('SIGTERM'));
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
};

startServer();

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
