const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({
    adminid: {type: mongoose.Schema.Types.ObjectId,ref:'User', required: true}


});

module.exports = mongoose.model('admin', adminschema);