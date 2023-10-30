import { Component } from '@angular/core';
import { POSITION } from '@vissoto-angular/ui';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  ePosition = POSITION;
}
