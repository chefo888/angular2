import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importando componentes
import { Componente1 } from './componentes/Componente1';
import { Componente2 } from './componentes/Componente2';
import { ComponenteError } from './componentes/ComponenteError';
import { ComponenteHome } from './componentes/ComponenteHome';
import { ComponenteContacto } from './componentes/ComponenteContacto';
import { CocheComponent } from './componentes/coches.componente';
import { PlantillaComponent } from './plantillas/plantilla.component';

const appRutas: Routes = [
    {path: '', component: ComponenteHome},
    {path: 'componente-uno', component: Componente1},
    {path: 'componente-dos', component: Componente2},
    {path: 'home', component: ComponenteHome},
    {path: 'contacto', component: ComponenteContacto},
    {path: 'contacto/:pagina', component: ComponenteContacto},
    {path: 'coches', component: CocheComponent},
    {path: 'plantilla', component: PlantillaComponent},
    {path: '**', component: ComponenteError},
];

export const appRutasProv: any[] = [];
export const rutas: ModuleWithProviders = RouterModule.forRoot(appRutas);
