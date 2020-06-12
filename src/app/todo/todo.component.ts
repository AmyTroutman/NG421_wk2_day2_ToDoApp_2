import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../itodo';
import { TodoService } from '../services/todo.service';
import { isFormattedError } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: ITodo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  removeTodo() {
    this.todoService.deleteTodo(this.todo);
  }

}
