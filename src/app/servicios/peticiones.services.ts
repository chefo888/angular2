import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
  public url: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }
  getPrueba(){
      return 'Hola mundo desde el servicio';
  }
  getArticulos(): Observable<any>{
    return this._http.get(this.url);
  }
}

/*
---------------------------------------------------------
  import {map} from 'rxjs/operators';
  Y usala de esta manera:
  .pipe(map(res => res.json()));
---------------------------------------------------------
  ERROR in node_modules/rxjs/Observable.d.ts(1,15): error TS2307: Cannot find module 'rxjs-compat/Observable'.
  Para solucionarlo tenemos que cortar la ejecución de nuestro servidor local de desarrollo de Angular pulsando
  Ctrl+C y ejecutamos este comando para instalar una libreria que falta:
  npm install --save rxjs-compat
*/
