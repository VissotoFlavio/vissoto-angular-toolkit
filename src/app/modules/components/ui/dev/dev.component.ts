import { Component, TemplateRef, ViewChild } from '@angular/core';

import { COLOR } from '../../../../components/dev-comp/interface/color';
import { ModalRef } from '../../../../components/dev-comp/models/modal.ref';
import { ModalServices } from '../../../../components/dev-comp/services/modal.services';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent {
  constructor(private modalService: ModalServices) {}
  show = false;

  @ViewChild('modal') modalTemplateRef: TemplateRef<unknown>;
  modalRef: ModalRef;

  close(): void {
    this.modalService.close();
  }

  open1(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      position: 'top',
      showType: 'frame',
      color: 'pink',
      size: 'small',
    });
  }

  open2(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      position: 'center',
      showType: 'frame',
      size: 'small',
      color: 'blue',
    });
  }

  open3(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      position: 'bottom',
      showType: 'frame',
      size: 'small',
      color: 'red-to-yellow',
    });
  }

  open4(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      showType: 'side',
      rounded: 'md',
      position: 'top-left',
      size: 'small',
      color: COLOR.green,
    });
  }

  open5(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      showType: 'side',
      position: 'top-right',
      size: 'small',
      color: 'orange',
    });
  }

  open6(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      showType: 'side',
      position: 'bottom-left',
      size: 'small',
      color: 'pink',
    });
  }

  open7(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      showType: 'side',
      position: 'bottom-right',
      size: 'small',
      color: 'pink-to-orange',
    });
  }
}
