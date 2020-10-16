import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MensajeComponent } from './mensaje/mensaje.component';
import { RequerimientosComponent } from './requerimientos/requerimientos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { PagoComponent } from './pago/pago.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    MensajeComponent,
    RequerimientosComponent,
    ResultadosComponent,
    PagoComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
