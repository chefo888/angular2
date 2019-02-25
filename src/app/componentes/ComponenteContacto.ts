import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; // recibir parametros por la url

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'contacto',
    templateUrl: '../views/contacto.html',
})
// tslint:disable-next-line:component-class-suffix
export class ComponenteContacto {
    public parametro: string; // variable para guardar el parametro
    constructor(
        // tslint:disable-next-line:variable-name
        private _route: ActivatedRoute,
        // tslint:disable-next-line:variable-name
        private _router: Router
    ){}

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            this.parametro = params.pagina;
        });
    }
    public redirigir() {
        this._router.navigate( ['contacto', 'jose-luis'] );
    }

    public redirigirDos() {
        this._router.navigate( ['home'] );
    }
}
