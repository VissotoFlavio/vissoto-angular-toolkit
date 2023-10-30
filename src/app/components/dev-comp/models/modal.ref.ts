import { ComponentRef } from '@angular/core';
import { DevCompComponent } from '../dev-comp.component';

/**
 * Classe de referencia do modal.
 */
export class ModalRef {
  constructor(private componentRef: ComponentRef<DevCompComponent>) {}

  /**
   * Fecha e destroi o componente.
   */
  destroy(): void {
    this.componentRef.destroy();
  }
}
