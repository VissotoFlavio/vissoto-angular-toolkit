import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-toolkit-web';

  toggleOpenMenu = new EventEmitter<boolean>();

  openMenu(): void {
    this.toggleOpenMenu.emit();
  }
}
