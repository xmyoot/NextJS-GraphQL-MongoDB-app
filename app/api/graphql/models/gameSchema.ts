// gameSchema.ts
import mongoose, { Schema } from 'mongoose';

const gameSchema = new Schema({
  gameTitle: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: false },
  discountCodes: { type: [String], required: false },
  regions: { type: [String], required: false },
  editions: { type: [String], required: false },
  ratings: { type: Number, required: false },
  tags: { type: [String], required: false },
  reviews: { type: [String], required: false },
});

export default mongoose.models.Game || mongoose.model('Game', gameSchema);
