import { Component, OnInit } from '@angular/core';

import { CodeViewer } from 'src/app/components/code-viewer/interfaces/code-viewer.interface';
import { Language } from 'src/app/components/code-viewer/interfaces/languages.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  //cardsAlfa: CardAlfa[] = [];

  codeModule = {
    code:
      "import { CardAlfaModule } from '@vissoto-angular/ui';\n\n" +
      '\t@NgModule({\n' +
      '\t\tdeclarations: [],\n' +
      '\t\tproviders: [],\n' +
      '\t\timports: [CommonModule, ComponentsRoutingModule, CardAlfaModule],\n' +
      '\t})\n' +
      '\texport class ComponentsModule {}',
    language: Language.TypeScript,
  } as CodeViewer;

  codeCardAlfaInterfaceExample = {
    code:
      'export interface CardAlfa {' +
      '\n\t\ttitle: string;' +
      '\n\t\tmessage: string;' +
      '\n\t\tdate: string;' +
      '\n\t\timageSrc: string;' +
      '\n\t\ttags: TagAlfa[];' +
      '\n\t}' +
      '\n\n\texport interface TagAlfa {' +
      '\n\t\tname: string;' +
      '\n\t}',
    language: Language.TypeScript,
  } as CodeViewer;

  codeImplementationExample = {
    code:
      'const card = {' +
      "\n\t\tdate: '01/11/2020'," +
      "\n\t\timageSrc: 'https://i.pinimg.com/564x/9b/48/27/9b4827a1c57b34f319baa462399cdff7.jpg,'" +
      "\n\t\tmessage: 'Mewtwo foi criado pela recombinação dos genes de Mew. Dizem que tem o coração mais selvagem entre os Pokémon.'," +
      "\n\t\ttags: [{ name: 'Pokemon' }, { name: 'Cards' }]," +
      "\n\t\ttitle: '#150 Mewtwo'," +
      '\n\t} as CardAlfa',
    language: Language.TypeScript,
  } as CodeViewer;

  codeExample = {
    code: '<vat-card-alfa [card]="cardsAlfa"></vat-card-alfa>',
    language: Language.HTML,
  } as CodeViewer;

  codeWidthExample = {
    code: '<vat-card-alfa style="width: 250px" [card]="cardsAlfa"></vat-card-alfa>',
    language: Language.HTML,
  } as CodeViewer;

  codeClickExample = {
    code: '<vat-card-alfa (clickedCard)="event()" [card]="cardsAlfa"></vat-card-alfa>',
    language: Language.HTML,
  } as CodeViewer;

  ngOnInit(): void {
    this.getCards();
  }

  private getCards(): void {
    //this.getCardsAlfa();
  }

  // getCardsAlfa(): void {
  //   this.cardsAlfa.push({
  //     date: '25/10/2020',
  //     imageSrc: 'https://i.pinimg.com/564x/a2/0e/17/a20e179205e3d304a89bb3264434817b.jpg',
  //     message: 'Ele libera um fedor de suas antenas vermelhas para repelir os inimigos. Ele cresce por muda repetidamente.',
  //     tags: [{ name: 'Pokemon' }, { name: 'Cards' }],
  //     title: '#010 Caterpie',
  //   });

  //   this.cardsAlfa.push({
  //     date: '01/11/2020',
  //     imageSrc: 'https://i.pinimg.com/564x/cd/6c/a7/cd6ca735f6c1f43ca9bcea2d1ee88653.jpg',
  //     message: 'Ele se esconde nas sombras. Diz-se que nas salas onde Gengar está escondido, a temperatura cai quase 10 graus Fahrenheit.',
  //     tags: [{ name: 'Pokemon' }, { name: 'Cards' }],
  //     title: '#094 Gengar',
  //   });

  //   this.cardsAlfa.push({
  //     date: '01/11/2020',
  //     imageSrc: 'https://i.pinimg.com/564x/9b/48/27/9b4827a1c57b34f319baa462399cdff7.jpg',
  //     message: 'Mewtwo foi criado pela recombinação dos genes de Mew. Dizem que tem o coração mais selvagem entre os Pokémon.',
  //     tags: [{ name: 'Pokemon' }, { name: 'Cards' }],
  //     title: '#150 Mewtwo',
  //   });

  //   this.cardsAlfa.push({
  //     date: '25/08/2020',
  //     imageSrc: 'https://i.pinimg.com/564x/cd/17/19/cd17192bbeb3e76cfa5c16d87a64b3ad.jpg',
  //     message: 'O folclore diz que em noites sem lua, este Pokémon fará as pessoas verem pesadelos horríveis.',
  //     tags: [{ name: 'Pokemon' }, { name: 'Cards' }],
  //     title: '#491 Darkrai',
  //   });

  //   this.cardsAlfa.push({
  //     date: '01/11/2020',
  //     imageSrc: 'https://i.pinimg.com/564x/3f/b8/0c/3fb80c3dc4dcbed5d781f06a7dde09b8.jpg',
  //     message: 'Ele dorme em uma trincheira no fundo do mar. Se bater as asas, diz-se que causa uma tempestade de 40 dias.',
  //     tags: [{ name: 'Pokemon' }, { name: 'Cards' }],
  //     title: '#249 Lugia',
  //   });
  // }
}
