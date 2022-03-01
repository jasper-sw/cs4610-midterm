import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'server/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todosRepository.find();
  }

  create(todo: Todo) {
    return this.todosRepository.save(todo);
  }

  findById(targetId: number) {
    return this.todosRepository.find({where: {id: targetId}});
  }

  toggleCompleteFromId(targetId: number, targetStatus: boolean) {
    return this.todosRepository.update({id: targetId}, {isComplete: targetStatus});
  }
}
