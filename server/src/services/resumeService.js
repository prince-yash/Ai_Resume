const Resume = require('../models/Resume');
const ApiError = require('../utils/ApiError');
const { generateResumeContent } = require('./aiService');

const createResume = async (payload) => {
  const aiResult = await generateResumeContent(payload);
  const resume = await Resume.create({
    ...payload,
    ...aiResult
  });
  return resume;
};

const getAllResumes = async (userId) => {
  return Resume.find({ userId }).sort({ createdAt: -1 });
};

const getResumeById = async (id, userId) => {
  const resume = await Resume.findOne({ _id: id, userId });
  if (!resume) {
    throw new ApiError(404, 'Resume not found');
  }
  return resume;
};

const updateResume = async (id, payload, userId) => {
  // Check if resume belongs to user
  const resume = await Resume.findOne({ _id: id, userId });
  if (!resume) {
    throw new ApiError(404, 'Resume not found');
  }

  const aiResult = await generateResumeContent(payload);

  const updatedResume = await Resume.findByIdAndUpdate(
    id,
    {
      ...payload,
      ...aiResult
    },
    { new: true, runValidators: true }
  );

  return updatedResume;
};

const deleteResume = async (id, userId) => {
  const deleted = await Resume.findOneAndDelete({ _id: id, userId });
  if (!deleted) {
    throw new ApiError(404, 'Resume not found');
  }
  return deleted;
};

module.exports = {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume
};
