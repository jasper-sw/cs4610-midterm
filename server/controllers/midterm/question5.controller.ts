import { Controller, Get, Param, Post } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';
import { Todo } from 'server/entities/todo.entity';

@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todos:content')
  public async createTodo(@Param('content') content: string) {
    const newTodo = new Todo()
    newTodo.content = content;
    newTodo.isComplete = false;
    const todos = await this.todosService.create(newTodo);
    const returnTodo = new Todo();
    returnTodo.isComplete = todos.isComplete;
    returnTodo.content = todos.content;
    returnTodo.id = todos.id;
    //console.log("controller return: ", returnTodo)
    return returnTodo;
  }

  @Post('/todos/toggle:id')
  public async setTodoCompletion(@Param('id') id: number) {
    //console.log("hit todos/toggleComplete")
    const targetTodo = await this.todosService.findById(id)
    //console.log("toggleComplete found: ", targetTodo)
    const newTodo = null;
    if (targetTodo[0]["isComplete"] == true) {
      const newTodo = await this.todosService.toggleCompleteFromId(id, false)
      //console.log("Toggled values: ", targetTodo, newTodo)
      const finalTodo = await this.todosService.findById(id)
      console.log("set todo: ", targetTodo, "to state: ", finalTodo)
      return newTodo;
    }
    else {
      const newTodo = await this.todosService.toggleCompleteFromId(id, true)
      //console.log("Toggled values: ", targetTodo, newTodo)
      const finalTodo = await this.todosService.findById(id)
      console.log("set todo: ", targetTodo, "to state: ", finalTodo)
      return newTodo;
    }
  }
}
