import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';

import { BodyInjectorService } from './../../../services/body-injector.service';
import { DevCompComponent } from '../dev-comp.component';
import { ModalConfig } from '../interface/modal.config';
import { ModalRef } from './../models/modal.ref';

@Injectable()
/**
 * Classe de serviço responsável pela exibição do modal.
 */
export class ModalServices {
  private componentFactory: ComponentFactory<DevCompComponent>;
  private modalRef: ModalRef;
  private componentRef: ComponentRef<DevCompComponent>;

  constructor(componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private bodyInjector: BodyInjectorService) {
    console.log(componentFactoryResolver);
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(DevCompComponent);
  }

  /**
   * Abre o modal.
   * @param config Configuração do modal;
   * @returns Referencia ao modal aberto.
   */
  open(config: ModalConfig): ModalRef {
    this.componentRef = this.createComponentRef();
    this.modalRef = new ModalRef(this.componentRef);
    this.componentRef.instance.setConfig(config);
    this.bodyInjector.stackBeforeAppRoot(this.componentRef);
    this.componentRef.instance.modalRef = this.modalRef;
    return new ModalRef(this.componentRef);
  }

  /**
   * Fecha o modal.
   */
  close(): void {
    this.componentRef.instance.closeModal();
  }

  /**
   * Cria a instancia do componente modal.
   * @returns Instancia do componente modal.
   */
  private createComponentRef(): ComponentRef<DevCompComponent> {
    return this.componentFactory.create(this.injector);
  }
}
