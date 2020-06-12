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

  title = 'Todos';
  todoList: ITodo [] =  [
    // example of how to make an item in todo list
    {id: 1, title: 'Install Angular CLI', isDone: false },
  ];
  todoTitle: string;
  todoId = 0;

  addTodo(): void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      isDone: false
    });

    // this part isn't working
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.todoId++;
  }

   // this isn't working
   getTodos() {
    return this.todoList;
  }

  deleteTodo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem.id === todo.id);
    this.todoList.splice(index, 1);
  }

  // async deleteTodo(todo: any) {
  //   const modal = this.modalService.open(ModalComponent);
  //   const modalComponent = modal.componentInstance;
  //   modalComponent.modalInstance = modal;

  //   try {
  //     const theResult = await modal.result;
  //     if (theResult === 'yes') {
  //       const index = this.todoList.findIndex(todoItem => todoItem === todo);
  //       this.todoList.splice(index, 1);
  //     }
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // }

}
