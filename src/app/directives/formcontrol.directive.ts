import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appFormControl]',
})
export class VatFormControlDirective {
  constructor(private el: ElementRef, private _renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.appFormControl);
  }

  @Input() appFormControl: FormControl;
}
