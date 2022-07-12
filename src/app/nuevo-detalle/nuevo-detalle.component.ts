import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-nuevo-detalle',
  templateUrl: './nuevo-detalle.component.html',
  styleUrls: ['./nuevo-detalle.component.css']
})
export class NuevoDetalleComponent implements OnInit {

  form!: FormGroup;

   constructor(public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombreArticulo: new FormControl('', [Validators.required]),
      cantidadArticulo: new FormControl('', Validators.required),
      idPedido: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.dataService.GuardarDetalle(this.form.value).subscribe((res:any) => {
         console.log('Detalle creado!');
         this.router.navigateByUrl('pedidos');
    })
  }
}
