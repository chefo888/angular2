// tslint:disable-next-line: quotemark
import { Component } from "@angular/core";

declare var $:any;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'plantilla',
    templateUrl: './plantilla.component.html',
})
export class PlantillaComponent {
  public titulo;
  public administrador;

  constructor() {
    this.titulo = 'Plantillas ngTemplate';
    this.administrador = true;
  }

  cambiar(v){
    this.administrador = v;
  }

  public toggleTitle(){
    $(".title").slideToggle();
  }
}
