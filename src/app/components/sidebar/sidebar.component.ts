import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Sidebar, SidebarSecondary } from './interface/sidebar.interface';

import { NavbarServices } from '../../services/navbar.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private navBarServices: NavbarServices) {}

  sidebarPrincipal: Sidebar[];
  sidebarSecondary: SidebarSecondary[];
  showMenu = false;
  pxHeight: number;

  @Input() toggleMenuEmitter: EventEmitter<boolean>;

  ngOnInit(): void {
    this.getPrimaryMenu();
    this.getSecondaryMenu();
    this.toggleMenu();
  }

  toggleMenu(): void {
    if (this.toggleMenuEmitter) {
      this.toggleMenuEmitter.subscribe({
        next: () => {
          this.showMenu = !this.showMenu;
        },
      });
    }
  }

  clickMenu(): void {
    this.showMenu = false;
  }

  private getPrimaryMenu(): void {
    this.navBarServices.getMenuPrincipal().subscribe({
      next: (x: Sidebar[]) => {
        this.sidebarPrincipal = x;
      },
    });
  }

  private getSecondaryMenu(): void {
    this.navBarServices.getMenuSecondary().subscribe({
      next: (x: SidebarSecondary[]) => {
        this.sidebarSecondary = x;
      },
    });
  }
}
