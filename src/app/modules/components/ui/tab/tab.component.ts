import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { CodeViewer } from '../../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsComponents } from '../../../../interfaces/components/events.interface';
import { ImageRequest } from './../../../../interfaces/components/ui/interfaces/select-request.interface';
import { ImageServices } from './../../../../services/components/ui/interfaces/image.services';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { TabItem } from '@vissoto-angular/ui';
import { TabRequest } from '../../../../interfaces/components/ui/tab/tab-request.interface';
import { TabServices } from '../../../../services/components/ui/tab/tab.services';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit, AfterViewInit {
  constructor(private cdr: ChangeDetectorRef, private tabServices: TabServices, private imageServices: ImageServices) {}

  itens: TabItem[] = [];
  itemSelected: TabItem;

  moduleCV: CodeViewer;
  maxWidthCV: CodeViewer;
  maxWidthElementCV: CodeViewer;
  widthPxCV: CodeViewer;
  interfaceTabCV: CodeViewer;
  imageCV: CodeViewer;
  events: EventsComponents[];

  maxWidthTab: string;

  @ViewChild('divExemplo') divExemplo: ElementRef;

  ngOnInit(): void {
    this.getDefaultValues();
    this.getTabRequest();
  }

  ngAfterViewInit(): void {
    this.getSizeTab();
    this.cdr.detectChanges();
  }

  click(value: TabItem): void {
    this.itemSelected = value;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getSizeTab();
  }

  private getSizeTab(): void {
    this.maxWidthTab = this.divExemplo.nativeElement.offsetWidth + 'px';
  }

  private getDefaultValues(): void {
    this.itens.push({
      id: '01',
      text: 'Venusaur',
      selected: true,
      img: {
        src: 'https://img.pokemondb.net/sprites/home/normal/venusaur.png',
      },
      options: {
        imgBg: 'assets/img/details_type_bg_grass.png',
      },
    });
    this.itens.push({
      id: '02',
      text: 'Charizard',
      img: {
        src: 'https://img.pokemondb.net/sprites/home/normal/charizard.png',
      },
      options: {
        imgBg: 'assets/img/details_type_bg_fire.png',
      },
    });
    this.itens.push({
      id: '03',
      text: 'Blastoise',
      img: {
        src: 'https://img.pokemondb.net/sprites/home/normal/blastoise.png',
      },
      options: {
        imgBg: 'assets/img/details_type_bg_water.png',
      },
    });
    this.itens.push({
      id: '04',
      text: 'Butterfree',
      disabled: true,
      img: {
        src: 'https://img.pokemondb.net/sprites/home/normal/butterfree.png',
      },
      options: {
        imgBg: '',
      },
    });
    this.itens.push({
      id: '07',
      text: 'Ekans',
      img: {
        src: 'https://img.pokemondb.net/sprites/home/normal/ekans.png',
      },
      options: {
        imgBg: 'assets/img/details_type_bg_poison.png',
      },
    });
    this.itens.push({
      id: '05',
      text: 'Staryu',
      img: {
        src: 'https://img.pokemondb.net/sprites/home/normal/staryu.png',
      },
      options: {
        imgBg: 'assets/img/details_type_bg_water.png',
      },
    });
    this.itens.push({
      id: '06',
      text: 'Starmie',
      img: {
        src: 'https://img.pokemondb.net/sprites/home/normal/starmie.png',
      },
      options: {
        imgBg: 'assets/img/details_type_bg_water.png',
      },
    });
    this.itemSelected = this.itens[0];
  }

  private getTabRequest(): void {
    this.tabServices.getTabCodes().subscribe({
      next: (x: RequestDefault<TabRequest>) => {
        this.moduleCV = x.data.codeModule;
        this.interfaceTabCV = x.data.interfaceTab;
        this.maxWidthCV = x.data.maxWidthPx;
        this.maxWidthElementCV = x.data.maxWidthElement;
        this.widthPxCV = x.data.widthPx;
        this.events = x.data.events;
      },
    });

    this.imageServices.getImageCodes().subscribe({
      next: (x: RequestDefault<ImageRequest>) => {
        this.imageCV = x.data.image;
      },
    });
  }
}
