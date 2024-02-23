import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDTO } from 'src/dtos/task.dto';
import { Task } from 'src/schema/todo.schema';

@Injectable()
export class TodoListService {
    constructor(@InjectModel('Tasks') private readonly todoModel: Model<Task>) {}

  async create(task: TaskDTO): Promise<Task> {
    const createdTodo = new this.todoModel(task);
    return createdTodo.save();
  }

  async getTasks() : Promise<Task[]> {
    try {
        const task = await this.todoModel.find({ isDeleted: false }).exec();
        return task;
      } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
      }
  }

  async deleteTask(taskToDelete: Task): Promise<Task> {
    const task : Task = await this.todoModel.findById(taskToDelete._id).exec();
    if (task) {
      task.isDeleted = true;
      return task.save();
    }
    return null;
  }

  async updateTodo(task: Task): Promise<Task> {
    return this.todoModel.findByIdAndUpdate(task._id, task, { new: true });
  }
}
