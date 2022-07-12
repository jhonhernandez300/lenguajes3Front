import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPedidos } from '../data/ipedidos';
import { DataService } from '../data/data.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  idPedido!: number;
  pedidos!: IPedidos;
  form!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, public dataService: DataService) { }

  ngOnInit(): void {
    this.idPedido = this.route.snapshot.params['id'];
    this.dataService.GetPedidoPorId(this.idPedido).subscribe((data: IPedidos)=>{
      console.log(data);
      this.pedidos = data;
    }); 
      
    this.form = new FormGroup({
      nombreCliente: new FormControl('', [Validators.required]),
      direccionCliente: new FormControl('', Validators.required),
      telefonoCliente: new FormControl('', Validators.required),
      fechaPedido: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.pedidos.idPedido = this.idPedido;
    this.pedidos.nombreCliente = this.form.value.nombreCliente;
    this.pedidos.direccionCliente = this.form.value.direccionCliente;
    this.pedidos.telefonoCliente = this.form.value.telefonoCliente;
    this.pedidos.fechaPedido = this.form.value.fechaPedido;
    //this.dataService.update(this.idPedido, this.form.value).subscribe((res:any) => {
    this.dataService.ActualizarPedido(this.pedidos).subscribe((res:any) => {
         console.log('Pedido actualizado!');
         this.router.navigateByUrl('pedidos');
    })
  }

}
