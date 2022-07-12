import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { IDetalles } from '../data/idetalles';


@Component({
  selector: 'app-editar-detalle',
  templateUrl: './editar-detalle.component.html',
  styleUrls: ['./editar-detalle.component.css']
})
export class EditarDetalleComponent implements OnInit {
  form!: FormGroup;
  idDetalle!: number;
  detalles!: IDetalles;
  idPedido!: number;

   constructor(public route: ActivatedRoute, public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.idDetalle = this.route.snapshot.params['id'];
    this.dataService.GetDetallePorId(this.idDetalle).subscribe((data: IDetalles)=>{
      console.log(data);
      this.detalles = data;
      console.log(this.detalles.cantidadArticulo);
      this.idPedido = this.detalles.idPedido;
      
    }); 

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
    
    this.detalles.idPedido = this.idPedido;
    this.detalles.cantidadArticulo = this.form.value.cantidadArticulo;
    this.detalles.nombreArticulo = this.form.value.nombreArticulo;
    //this.dataService.update(this.idPedido, this.form.value).subscribe((res:any) => {
    this.dataService.ActualizarDetalle(this.detalles).subscribe((res:any) => {
         console.log('detalle actualizado!');
         this.router.navigateByUrl('pedidos');
    })
  }
}
