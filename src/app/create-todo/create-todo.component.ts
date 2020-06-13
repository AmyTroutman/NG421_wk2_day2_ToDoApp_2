import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  todoList: ITodo [];
  todoTitle: string;
  description: string;
  // todoId = 0;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
    this.todoTitle = this.todoService.todoTitle;
  }

  createTodo() {
    this.todoService.addTodo(this.todoTitle);
    this.todoTitle = '';
  }

}
