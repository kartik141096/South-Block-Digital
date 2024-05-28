import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html'
})
export class ModalContentComponent {
  @Input() data: any;

  constructor(public activeModal: NgbActiveModal) { }
}