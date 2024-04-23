const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId, // Đảm bảo sử dụng một giá trị mặc định
  },
  dat: {
    type: String
  },
  description: {
    type: String
  },
  upload: {
    type: Date
  },
  filename: {
    type: String
  },
  path: {
    type: String
  },
  author: {
    type: Object,
    properties: {
      name: {
        type: String
      },
      description: {
        type: String
      }
    }
  },
});


const Driver = mongoose.model('driver', driverSchema);

module.exports = Driver;