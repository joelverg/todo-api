import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoListController } from './controller/todo-list/todo-list.controller';
import { TodoListService } from './services/todo-list/todo-list.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './schema/todo.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo_app'),
    MongooseModule.forFeature([{ name: 'Tasks', schema: TodoSchema }])
  ],
  controllers: [AppController, TodoListController, ],
  providers: [AppService, TodoListService],
})
export class AppModule {}
