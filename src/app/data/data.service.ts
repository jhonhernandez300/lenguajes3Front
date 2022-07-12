import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IPedidos } from './ipedidos';
import { IDetalles } from './idetalles';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiURL = "http://localhost:25390/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }  

  GetTodosLosPedidos(): Observable<any> {  
    return this.httpClient.get(this.apiURL + '/GetTodosLosPedidos/')  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  eliminarPedido(id:number){
    return this.httpClient.delete(this.apiURL + '/EliminarPedido/' + id, this.httpOptions)  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  eliminarPedido2(id: number): Observable<any> {    
    return this.httpClient.delete('http://localhost:25390/api/EliminarPedido'+  "/" + id);
  }

  crearPedido(pedidos:IPedidos): Observable<any> {  
    return this.httpClient.post(this.apiURL + '/GuardarPedido/', JSON.stringify(pedidos), this.httpOptions)  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  crearPedido2(pedidos: IPedidos): Observable<any> {
    return this.httpClient.post('http://localhost:25390/api/GuardarPedido', pedidos);
  }

  GetPedidoPorId(id:number): Observable<any> {  
    return this.httpClient.get(this.apiURL + '/GetPedidoPorId/' + id)  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  ActualizarPedido(pedidos:IPedidos): Observable<any> {  
    return this.httpClient.patch(this.apiURL + '/ActualizarPedido/', JSON.stringify(pedidos), this.httpOptions) 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  //********************************************************* detalles ************************************************ */
  GetDetallesPorIdPedido(id:number): Observable<any> {  
    return this.httpClient.get(this.apiURL + '/GetDetallesPorIdPedido/' + id)  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  GetDetallePorId(id:number): Observable<any> {  
    return this.httpClient.get(this.apiURL + '/GetDetallePorId/' + id)  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  eliminarDetalle(id: number): Observable<any> {    
    return this.httpClient.delete('http://localhost:25390/api/EliminarDetalle'+  "/" + id);
  }

  GuardarDetalle(detalles: IDetalles): Observable<any> {
    return this.httpClient.post('http://localhost:25390/api/GuardarDetalle', detalles);
  }

  ActualizarDetalle(detalle:IDetalles): Observable<any> {  
    return this.httpClient.patch(this.apiURL + '/ActualizarDetalle/', JSON.stringify(detalle), this.httpOptions) 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}