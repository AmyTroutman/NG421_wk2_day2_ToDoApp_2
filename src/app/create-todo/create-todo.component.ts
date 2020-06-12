import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  @Input() todo: ITodo;
  todoTitle: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoTitle = this.todoService.todoTitle;
  }
  // this isn't working
  createTodo() {
    this.todoService.addTodo();
  }

}
