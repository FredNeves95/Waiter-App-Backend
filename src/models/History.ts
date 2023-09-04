import { Schema, model } from 'mongoose';

export const History = model('History', new Schema({
  table: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
  },
  archivedAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        default: 1
      }
    }],
    required: true
  },
}));
