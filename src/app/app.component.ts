import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from './modal/modal.component';
import { ITodo } from './itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId = 0;
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      {id: 1, title: 'Install Angular CLI', isDone: false },

    ];
  }

  constructor(private modalService: NgbModal) {}

  addTodo(): void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      isDone: false
    });

    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.todoId++;
  }

  async deleteTodo(todo: any) {
    const modal = this.modalService.open(ModalComponent);
    const modalComponent = modal.componentInstance;
    modalComponent.modalInstance = modal;

    try {
      const theResult = await modal.result;
      if (theResult === 'yes') {
        const index = this.todoList.findIndex(todoItem => todoItem === todo);
        this.todoList.splice(index, 1);
      }
    } catch (ex) {
      console.log(ex);
    }
  }

}
