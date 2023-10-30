import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BodyInjectorService {
  constructor(private appRef: ApplicationRef) {}

  public stackBeforeAppRoot(componentRef: ComponentRef<unknown>): void {
    const domElement = this.createDomElement(componentRef);
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(domElement, appRoot);
  }

  private createDomElement(componentRef: ComponentRef<unknown>): HTMLElement {
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<unknown>).rootNodes[0] as HTMLElement;
    return domElement;
  }
}
