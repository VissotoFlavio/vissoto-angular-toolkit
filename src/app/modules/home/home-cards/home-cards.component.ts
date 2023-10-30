// import { CardAlfa, TagAlfa } from '@vissoto-angular/ui';

import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import { HomeServices } from './../../../../../src/app/services/home.services';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss'],
})
export class HomeCardsComponent implements OnInit {
  //cards: CardAlfa[] = [];
  loopingTeste: number[] = [];

  constructor(private service: HomeServices, private pipeDate: DatePipe) {}

  ngOnInit(): void {
    //this.getCards();
  }

  // private getCards(): void {
  //   this.service.getLastPosts().subscribe({
  //     next: (x: CardPost[]) => {
  //       x.forEach((element: CardPost) => {
  //         this.cards.push(this.convertCardAlfa(element));
  //       });
  //     },
  //   });
  // }

  // private convertCardAlfa(element: CardPost): CardAlfa {
  //   return {
  //     date: this.pipeDate.transform(element.datePost, 'dd/MM/yyyy HH:mm'),
  //     imageSrc: element.urlImage,
  //     message: element.subTitle,
  //     title: element.title,
  //     tags: element.tags.map((m: TagPost) => {
  //       return { name: m.name } as TagAlfa;
  //     }),
  //   } as CardAlfa;
  // }
}
