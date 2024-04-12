const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema({
  contributionId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  action: { type: String, required: true },
  details: Object,
  status: { type: String, required: true },
});

const Contribution = mongoose.model('Contribution', contributionSchema);

module.exports = Contribution;
