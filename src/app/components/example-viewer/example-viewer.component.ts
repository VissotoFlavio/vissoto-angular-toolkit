import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
})
export class ExampleViewerComponent {
  @Input() title: string;
  @Input() idExample: string;
  @Input() linkExample: string;

  //private fragment: string;

  /* istanbul ignore next */
  clickCopy(): void {
    const linkCopy = `${window.location.origin + window.location.pathname}`;
    const listener = (e: ClipboardEvent) => {
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', linkCopy);
        e.preventDefault();
      }
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
}
