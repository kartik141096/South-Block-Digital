import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './admin/common/modal-content/modal-content.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  openModal(data: any) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.data = data;
  }
}
