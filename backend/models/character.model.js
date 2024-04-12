const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  active:{type:Boolean, required:true},
  name: { type: String, required: true,unique: true},
  subtitle: { type: String, required: true, unique: true},
  description: { type: String, required: true},
  image:{type: String, required: true},
  strength:{type: Number, required: true},
  speed:{type: Number, required: true},
  skill:{type: Number, required: true},
  fear_factor:{type: Number, required: true},
  power:{type: Number, required: true},
  intelligence:{type: Number, required: true},
  wealth:{type: Number, required:true}
});

module.exports = mongoose.model('Character', characterSchema);