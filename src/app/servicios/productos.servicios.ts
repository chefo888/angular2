import { Injectable } from '@angular/core';

@Injectable()
export class ProductosServicios {
    // tslint:disable-next-line:ban-types
    public productos: Array<string>;
    constructor() {
        this.productos = ['leche', 'Aceite', 'Cafe'];
    }
/*
    public prueba(prod: String = 'Leche') {
        this.nombreProd = prod;
        return this.nombreProd;
    }
*/
    addProducto(el: string) {
        if (el !== '') {
            this.productos.push(el);
        }
    }
    eliminar(i: number) {
        this.productos.splice(i, 1); // segundo parametro es la cantidad de elementos a eliminar a partir del indice
    }
}
