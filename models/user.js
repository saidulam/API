const mongoose = require('mongoose');


var userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
      },
      lastname: {
        type: String,
        maxlength: 32,
        trim: true
      },
      email: {
        type: String,
        trim: true,
        required: true,
        unique: true
      },
     
     
      role: {
        type: string,
        default: []
      }
    },
    { timestamps: true }
  );