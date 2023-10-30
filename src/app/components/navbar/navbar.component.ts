import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() byClickOpenMenu = new EventEmitter<boolean>();

  clickOpenMenu(): void {
    this.byClickOpenMenu.emit();
  }
}
