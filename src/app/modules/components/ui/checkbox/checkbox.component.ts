import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CheckboxRequest } from '../../../../interfaces/components/ui/checkbox.request.interface';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { UIServices } from './../../../../services/components/ui/ui.services';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  constructor(private uiServices: UIServices) {}
  formCheck = new FormGroup({
    chk: new FormControl(true),
  });

  valuesPage: CheckboxRequest = {} as CheckboxRequest;

  ngOnInit(): void {
    this.getValuesPageRequest();
  }

  private getValuesPageRequest(): void {
    this.uiServices.getCheckboxCodes().subscribe({
      next: (x: RequestDefault<CheckboxRequest>) => {
        this.valuesPage = x.data;
      },
    });
  }
}
