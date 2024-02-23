import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TodoListService } from 'src/services/todo-list/todo-list.service';
import { TaskDTO } from 'src/dtos/task.dto'
import { Task } from 'src/schema/todo.schema';

@Controller('todo-list')
export class TodoListController {
  constructor(private readonly todoService: TodoListService) {}

  @Post('/add-task')
  async create(@Body() task: TaskDTO): Promise<Task> {
    console.log(
      task
    );
    
    return this.todoService.create(task);
  }

  @Get('/tasks')
  async getTasks(): Promise<Task[]> {
     const task = this.todoService.getTasks();
     return task;
  }

  @Post('/delete-task')
  async deleteTask(@Body() task: Task): Promise<Task> {
    const deletedTask = await this.todoService.deleteTask(task);
    return deletedTask;
  }

  @Put('update-task')
  async updateTodo(@Body() task: Task): Promise<Task> {
    return this.todoService.updateTodo(task);
  }
}
