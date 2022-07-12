import { Component, OnInit } from '@angular/core';
import { IPedidos } from '../data/ipedidos';
import { DataService } from '../data/data.service';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: IPedidos[] = [];  
  IdPedido: number = 0;

  constructor(private dataService: DataService) { }
  

  ngOnInit(): void {
    this.dataService.GetTodosLosPedidos().subscribe((data: IPedidos[])=>{
      this.pedidos = data;
      console.log(this.pedidos);
    }) 
  }

  eliminarPedido(id:number){
    this.dataService.eliminarPedido2(id).subscribe(res => {
         this.pedidos = this.pedidos.filter(res => res.idPedido !== id);
         console.log('Pedido borrado!');
    })
  }

}
