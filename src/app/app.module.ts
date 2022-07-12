import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NuevoPedidoComponent } from './nuevo-pedido/nuevo-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { BorrarPedidoComponent } from './borrar-pedido/borrar-pedido.component';
import { EliminarDetalleComponent } from './eliminar-detalle/eliminar-detalle.component';
import { NuevoDetalleComponent } from './nuevo-detalle/nuevo-detalle.component';
import { EditarDetalleComponent } from './editar-detalle/editar-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    DetallesComponent,
    MenuComponent,
    NuevoPedidoComponent,
    EditarPedidoComponent,
    BorrarPedidoComponent,
    EliminarDetalleComponent,
    NuevoDetalleComponent,
    EditarDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
