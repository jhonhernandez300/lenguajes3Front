import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {

  form!: FormGroup;

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombreCliente: new FormControl('', [Validators.required]),
      direccionCliente: new FormControl('', Validators.required),
      telefonoCliente: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.dataService.crearPedido(this.form.value).subscribe((res:any) => {
         console.log('Pedido creado!');
         this.router.navigateByUrl('pedidos');
    })
  }

}
