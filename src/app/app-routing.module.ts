import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { NuevoPedidoComponent } from './nuevo-pedido/nuevo-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { BorrarPedidoComponent } from './borrar-pedido/borrar-pedido.component';
import { NuevoDetalleComponent} from './nuevo-detalle/nuevo-detalle.component';
import { EditarDetalleComponent } from './editar-detalle/editar-detalle.component';


const routes: Routes = [  
  { path: 'pedidos', component: PedidosComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'nuevo-pedido', component: NuevoPedidoComponent },
  { path: 'editar-pedido/:id', component: EditarPedidoComponent },  
  { path: 'borrar-pedido', component: BorrarPedidoComponent },
  { path: 'nuevo-detalle', component: NuevoDetalleComponent },
  { path: 'editar-detalle/:id', component: EditarDetalleComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
