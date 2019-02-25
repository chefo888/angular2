import { Component } from '@angular/core';
import { Coche } from '../modelos/Coche';
import { PeticionesService } from '../servicios/peticiones.services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'coches',
  templateUrl: '../views/coches.html',
  providers: [PeticionesService]
})

export class CocheComponent {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos;
  constructor(
    public _peticionesService: PeticionesService
  ){
    this.coche = new Coche('', 0, '');
    this.coches = [];
  }

  onSubmit(){
    console.log(this.coche);
    this.coches.push(this.coche);
    this.coche = new Coche('', 0, '');
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result => {
        if(result.code != 200){
          this.articulos = result;
          console.log(result);
        }else{
            console.log(result.data);
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
