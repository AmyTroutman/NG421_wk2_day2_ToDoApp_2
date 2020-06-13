import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalInstance;
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.modalInstance.close('no');
  }
  yes() {
    this.modalInstance.close('yes');
  }
}
