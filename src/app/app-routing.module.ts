import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagoComponent} from './pago/pago.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  {
    path: 'pago', component:PagoComponent
  },
  {
    path: 'resultados', component:ResultadosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
