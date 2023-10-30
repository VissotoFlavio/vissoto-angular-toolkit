import { CodeViewer } from './../../../../components/code-viewer/interfaces/code-viewer.interface';
import { Component } from '@angular/core';
import { Language } from 'src/app/components/code-viewer/interfaces/languages.enum';
import { POSITION } from '@vissoto-angular/ui';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  ePosition = POSITION;
  codeModule = {
    code:
      "import { TooltipModule } from '@vissoto-angular/ui';\n\n" +
      '\t@NgModule({\n' +
      '\t\tdeclarations: [],\n' +
      '\t\tproviders: [],\n' +
      '\t\timports: [CommonModule, ComponentsRoutingModule, TooltipModule],\n' +
      '\t})\n' +
      '\texport class ComponentsModule {}',
    language: Language.TypeScript,
  } as CodeViewer;

  codeExample = {
    code:
      '<vat-tooltip [text]="\'Tooltip Exemplo\'" [position]="\'Position.top\'">\n' +
      '\t\t<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tooltip para cima</button>\n' +
      '\t</vat-tooltip>',
    language: Language.HTML,
  } as CodeViewer;

  codeText = {
    code: '<vat-tooltip [text]="\'Tooltip Exemplo\'"></vat-tooltip>',
    language: Language.HTML,
  } as CodeViewer;

  codePosition = {
    code: '<vat-tooltip [position]="\'Position.top\'"></vat-tooltip>',
    language: Language.HTML,
  } as CodeViewer;

  codeEnum = {
    code: `export enum Position {
      top = 'top',
      right = 'right',
      bottom = 'bottom',
      left = 'left',
    }`,
    language: Language.TypeScript,
  } as CodeViewer;
}
