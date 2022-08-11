import mongoose from "mongoose";


//here we are designing the database model for our sign up page in which we will define the fields 

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  
  id: { type: String },
});

export default mongoose.model("User", userSchema);