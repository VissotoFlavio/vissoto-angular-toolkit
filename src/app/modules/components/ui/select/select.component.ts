import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ROUNDED, SIZE } from '@vissoto-angular/ui';

import { ActivatedRoute } from '@angular/router';
import { CodeViewer } from './../../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsComponents } from '../../../../interfaces/components/events.interface';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { SelectItem } from '@vissoto-angular/ui';
import { SelectRequest } from '../../../../interfaces/components/ui/select/select-request.interface';
import { SelectServices } from '../../../../services/components/ui/select/select.services';
import { UIServices } from '../../../../services/components/ui/ui.services';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit, AfterViewInit {
  constructor(private selectServices: SelectServices, private uiServices: UIServices, private route: ActivatedRoute) {}

  @ViewChild('pageInfo') pageInfo: ElementRef;

  itens: SelectItem[] = [];

  moduleCV: CodeViewer;
  roundedCV: CodeViewer;
  roundedEnumCV: CodeViewer;
  titleCV: CodeViewer;
  events: EventsComponents[];

  eRounded = ROUNDED;
  eSize = SIZE;

  ngOnInit(): void {
    this.getSelectRequest();
    this.getRoundedEnum();
    this.itens.push({
      selected: true,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png',
      text: 'Bulbasaur',
      value: 1,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/ivysaur.png',
      text: 'Ivysaur',
      value: 2,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/venusaur.png',
      text: 'venusaur',
      value: 3,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/charmander.png',
      text: 'Charmander',
      value: 4,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/charmeleon.png',
      text: 'Charmeleon',
      value: 5,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/charizard.png',
      text: 'Charizard',
      value: 6,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/squirtle.png',
      text: 'Squirtle',
      value: 7,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/wartortle.png',
      text: 'Wartortle',
      value: 8,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/blastoise.png',
      text: 'Blastoise',
      value: 9,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/caterpie.png',
      text: 'Caterpie',
      value: 10,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/metapod.png',
      text: 'Metapod',
      value: 11,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/butterfree.png',
      text: 'Butterfree',
      value: 12,
    });
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      this.scrollToAnchor(fragment);
    });
  }

  scrollToAnchor(fragment: string | null): void {
    if (fragment) {
      const el = document.querySelector('#' + fragment);
      if (el) {
        el.scrollIntoView();
      }
    }
  }

  private getRoundedEnum(): void {
    this.uiServices.getSizeEnum().subscribe({
      next: (x: RequestDefault<CodeViewer>) => {
        this.roundedEnumCV = x.data;
      },
    });
  }

  private getSelectRequest(): void {
    this.selectServices.getSelectCodes().subscribe({
      next: (x: RequestDefault<SelectRequest>) => {
        this.moduleCV = x.data.codeModule;
        this.roundedCV = x.data.codeRounded;
        this.titleCV = x.data.codeTitle;
        this.events = x.data.events;
      },
    });
  }
}
