import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ico',
  templateUrl: './ico.component.html',
  styleUrls: ['./ico.component.scss'],
})
export class IcoComponent {
  @Input() name = '';
  @Input() valueCopy = '';

  /* istanbul ignore next */
  copy(): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = `<${this.valueCopy}></${this.valueCopy}>`;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
