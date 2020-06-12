import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { ITodo } from '../itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private modalService: NgbModal) {
  }
  // tslint:disable-next-line: no-trailing-whitespace
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId = 0;

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

  getTodos(){}
}
