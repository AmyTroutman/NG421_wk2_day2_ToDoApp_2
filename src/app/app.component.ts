import { Component,OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
  todoList: any [] = [];
  todoTitle: string;
  todoId: number = 0;
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      { title: 'Install Angular CLI', isDone: false },

    ];
  }

  constructor(private modalService: NgbModal){}

  addTodo(): void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false
    });

    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
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
