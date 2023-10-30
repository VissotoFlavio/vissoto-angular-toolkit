import { COLOR, ROUNDED, SIZE } from '@vissoto-angular/ui';
import { Component, OnInit } from '@angular/core';

import { ButtonEvents } from './../../../../interfaces/components/ui/button/button-events.interface';
import { ButtonServices } from '../../../../services/components/ui/button/button-events.services';
import { CodeViewer } from '../../../../components/code-viewer/interfaces/code-viewer.interface';
import { Language } from '../../../../components/code-viewer/interfaces/languages.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor(private service: ButtonServices) {}

  buttonEvents: ButtonEvents[];
  eRounded = ROUNDED;
  eSize = SIZE;
  eColor = COLOR;

  ngOnInit(): void {
    this.getButtonEvents();
  }

  private getButtonEvents(): void {
    this.service.getButtonEvents().subscribe({
      next: (x: ButtonEvents[]) => {
        this.buttonEvents = x;
      },
    });
  }

  codeModule = {
    code: `
    import { ButtonModule } from '@vissoto-angular/ui';
    
    @NgModule({
      declarations: [],
      providers: [],
      imports: [CommonModule, ComponentsRoutingModule, ButtonModule],
    })
    export class ComponentsModule { }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeColorEnum = {
    code: `export enum Color {
        blue = 'blue',
        alternative = 'alternative',
        green = 'green',
        red = 'red',
        yellow = 'yellow',
        purple = 'purple',
        orange = 'orange',
        pink = 'pink',
        purpleToBlue = 'purple-to-blue',
        cyanToBlue = 'cyan-to-blue',
        greenToBlue = 'green-to-blue',
        purpleToPink = 'purple-to-pink',
        pinkToOrange = 'pink-to-orange',
        tealToLime = 'teal-to-lime',
        redToYellow = 'red-to-yellow',
    }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeColor = {
    code: `
        <vat-button [text]="'label'" [color]="'red'"></vat-button>
        <vat-button [text]="'label'" [color]="'orange'"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeSizeEnum = {
    code: `export enum Size {
      'extra-small' = 'extra-small',
      'small' = 'small',
      'base' = 'base',
      'large' = 'large',
      'extra-large' = 'extra-large',
    }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeSize = {
    code: `\n\t<vat-button [text]="'Exemplo'" [color]="'red'" [size]="'extra-small'"></vat-button>
    <vat-button [text]="'Exemplo'" [color]="'red'" [size]="'small'"></vat-button>
    <vat-button [text]="'Exemplo'" [color]="'red'" [size]="'base'"></vat-button>
    <vat-button [text]="'Exemplo'" [color]="'red'" [size]="'large'"></vat-button>
    <vat-button [text]="'Exemplo'" [color]="'red'" [size]="'extra-large'"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeRoundedEnum = {
    code: `export enum Rounded {
      'sm' = 'sm',
      'rounded' = 'rounded',
      'md' = 'md',
      'lg' = 'lg',
      'xl' = 'xl',
      '2xl' = '2xl',
      '3xl' = '3xl',
      'full' = 'full',
      'none' = 'none',
    }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeRounded = {
    code: `
    <vat-button [text]="'Exemplo'" [color]="'red'" [rounded]="1"></vat-button>
    <vat-button [text]="'Exemplo'" [color]="'red'" [rounded]="2"></vat-button>
    <vat-button [text]="'Exemplo'" [color]="'red'" [rounded]="3"></vat-button>
    <vat-button [text]="'Exemplo'" [color]="'red'" [rounded]="4"></vat-button>
    <vat-button [text]="'Exemplo'" [color]="'red'" [rounded]="5"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeMensagem = {
    code: `
    <vat-button [text]="'Exemplo'" [color]="'red'" [rounded]="1" [message]="'1.235.896'"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientDuotone]="4" [rounded]="1" [message]="'mensagem'"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;
}
