import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { ITodo } from '../itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // title = 'Todos';
  todoList: ITodo[] = [
    // example of how to make an item in todo list
    // {id: 1, title: 'Install Angular CLI', isDone: false },
  ];
  todoTitle: string;
  todoId: number;

  constructor(private modalService: NgbModal) {
  }

  addTodo(todoTitle: string) {
    this.todoList.push({
      id: this.todoId,
      title: todoTitle,
      description: ''
    });

    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.todoId++;
  }

  getTodos() {
    return this.todoList;
  }

  // deleteTodo(todo: ITodo) {
  //   const index = this.todoList.findIndex((todoItem) => todoItem === todo);
  //   this.todoList.splice(index, 1);
  // }

  async deleteTodo(todo: ITodo) {
    const modal = this.modalService.open(ModalComponent);
    const modalComponent = modal.componentInstance;
    modalComponent.modalInstance = modal;


    const theResult = await modal.result;
    if (theResult === 'yes') {
      const index = this.todoList.findIndex((todoItem) => todoItem === todo);
      this.todoList.splice(index, 1);
    }

  }

}
