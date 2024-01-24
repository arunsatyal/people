import mongoose from "mongoose";


const peopleSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true,
    default: "App User"
  },

  lastName:{
    type: String,
    required: true,
  },

  jobTitle:{
    type: String,
    required: true,
  },

  company:{
    type: String, Number,
    required: true,
    default: "App User"
  },

  email:{
    type: String,
    trim: true,
    index: true,
    lowercase: true,
    required: true,

  },

  linkedin:{
    type: String,
    trim: true,
  },

  instagram:{
    type: String,
    trim: true,
  },

  username:{
    type: String,
    trim: true,
    required: true,
  }
})

export default mongoose.model("people", peopleSchema);