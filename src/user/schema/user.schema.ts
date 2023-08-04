import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  postalCode: Number,
});
