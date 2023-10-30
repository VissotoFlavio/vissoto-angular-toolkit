import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  // cards: CardAlfa[] = [
  //   {
  //     imageSrc: './../../../assets/img/http.png',
  //     message: 'Componente HTTP Client',
  //     title: 'HTTP Client',
  //   },
  //   {
  //     imageSrc: './../../../assets/img/blackhole.png',
  //     message: 'Componente UI',
  //     title: 'UI',
  //   },
  // ] as CardAlfa[];
  // clickCard(card: CardAlfa): void {
  //   switch (card.title) {
  //     case 'HTTP Client':
  //       this.router.navigate(['components/http-client/utilizacao']);
  //       break;
  //     case 'UI':
  //       this.router.navigate(['/components/ui/button']);
  //       break;
  //   }
  // }
}
