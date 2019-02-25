// tslint:disable-next-line:quotemark
import { Component } from "@angular/core";
import { ProductosServicios } from '../servicios/productos.servicios';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'home',
    templateUrl: '../views/componenteHome.html',
    providers: [ProductosServicios]
})
// tslint:disable-next-line:component-class-suffix
export class ComponenteHome {
    // tslint:disable-next-line:no-inferrable-types
    prod: string = '';
    fecha: any;
    constructor(
        // tslint:disable-next-line:variable-name
        public _prodServicios: ProductosServicios
    ) {
        this.fecha = new Date();
    }

    // tslint:disable-next-line:use-life-cycle-interface
    public ngOnInit() {
        // this._prodServicios.prueba();
    }
}
