import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDetalles } from '../data/idetalles';
import { DataService } from '../data/data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  idPedido!: number;  
  
  detalles = new Subject<IDetalles[]>();
  detalles$ = this.detalles.asObservable();

  constructor(private route: ActivatedRoute, private router: Router, public dataService: DataService) { }

  ngOnInit(): void {
    this.idPedido = this.route.snapshot.params['id'];
    this.dataService.GetDetallesPorIdPedido(this.idPedido)
      .subscribe((data: IDetalles[]) => this.detalles.next(data));                        
  }  
  

}
