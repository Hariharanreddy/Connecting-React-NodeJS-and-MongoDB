import mongoose from 'mongoose';
const { Schema } = mongoose;

//Schema gives the structure and validates the data stored
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  }
});

//a Mongoose model provides an interface for the
//database to create, query, update, delete records, and so on

//const User is a class and we can create objects of it.
export const Users = mongoose.model('Users', userSchema);
