import { Component, OnInit } from '@angular/core';
import { ITodo } from './itodo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.todoService.todoTitle = '';
    this.todoService.todoList = [
      // example of how to make an item in todo list
      {id: 1, title: 'Install Angular CLI', isDone: false },

    ];
  }

  constructor(private todoService: TodoService) {}
}
