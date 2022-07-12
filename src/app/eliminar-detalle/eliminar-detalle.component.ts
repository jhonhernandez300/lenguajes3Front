import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDetalles } from '../data/idetalles';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-eliminar-detalle',
  templateUrl: './eliminar-detalle.component.html',
  styleUrls: ['./eliminar-detalle.component.css']
})
export class EliminarDetalleComponent implements OnInit {

  idDetalle!: number;

  constructor(private route: ActivatedRoute, private router: Router, public dataService: DataService) { }

  ngOnInit(): void {
    this.idDetalle = this.route.snapshot.params['id'];
    this.dataService.eliminarDetalle(this.idDetalle).subscribe((res:any) => {
      console.log('Detalle eliminado!');
      this.router.navigateByUrl('detalles');      
    })
  }

}
