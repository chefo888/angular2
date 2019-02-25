import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { rutas, appRutasProv } from './app.rutas';
import { Componente1 } from './componentes/Componente1';
import { ComponenteError } from './componentes/ComponenteError';
import { Componente2 } from './componentes/Componente2';
import { ComponenteHome } from './componentes/ComponenteHome';
import { ComponenteContacto } from './componentes/ComponenteContacto';
import { ConversorPipe } from './pipes/ejemploPipe';
import { CocheComponent } from './componentes/coches.componente';

import {HttpClientModule} from '@angular/common/http';
import { PlantillaComponent } from './plantillas/plantilla.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1,
    Componente2,
    ComponenteHome,
    ComponenteContacto,
    ComponenteError,
    ConversorPipe,
    CocheComponent,
    PlantillaComponent,
  ],
  imports: [
    BrowserModule,
    rutas,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ appRutasProv],
  bootstrap: [AppComponent]
})
export class AppModule { }
