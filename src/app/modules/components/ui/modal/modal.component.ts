import { COLOR, ROUNDED, SIZE } from '@vissoto-angular/ui';
import { Component, OnInit } from '@angular/core';

import { UIServices } from '../../../../services/components/ui/ui.services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private uiServices: UIServices) {}

  eRounded = ROUNDED;
  eColor = COLOR;
  eSize = SIZE;

  // showModal = false;

  // valuesPage: ModalRequest = {} as ModalRequest;

  ngOnInit(): void {
    //this.getValuesPageRequest();
    console.log(this.eColor, this.eRounded, this.eSize);
  }

  // toggleModal(): void {
  //   this.showModal = !this.showModal;
  // }

  // closeModal(): void {
  //   this.showModal = false;
  // }

  // private getValuesPageRequest(): void {
  //   this.uiServices.getModalCodes().subscribe({
  //     next: (x: RequestDefault<ModalRequest>) => {
  //       this.valuesPage = x.data;
  //       this.getEventsPage();
  //     },
  //   });
  // }

  // private getEventsPage(): void {
  //   this.uiServices.getEvents().subscribe({
  //     next: (x: RequestDefault<EventsRequest>) => {
  //       this.valuesPage.events = [];
  //       x.data.CustomEvents.forEach((element: EventsComponents) => {
  //         this.valuesPage.events.push(element);
  //       });
  //     },
  //   });
  // }
}
