// userSchema.ts
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    first_name: { type: String, required: [true, "All fields are required"] },
    last_name: { type: String, required: [true, "All fields are required"] },
    email: { type: String, required: [true, "All fields are required"] },
    age: { type: String, required: [true, "All fields are required"] },
    active: Boolean,
});

export default mongoose.models.User || mongoose.model("User", userSchema);