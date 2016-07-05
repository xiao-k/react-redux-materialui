var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const SampleSchema   = new Schema({
  title:   { type: String, required: true, unique: true },
  created: { type: Date,   required: true, default: Date.now }
});

export default mongoose.model('Sample', SampleSchema);