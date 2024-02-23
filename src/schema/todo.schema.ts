import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  status: { type: String, default: 'pending' },
  isDeleted: { type: Boolean, default: false }
});

export class Task extends mongoose.Document {
  task: string;
  status: string;
  isDeleted: boolean;
}