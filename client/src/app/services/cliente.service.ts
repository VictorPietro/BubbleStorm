import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://192.168.0.90:8080/clientes';

  constructor(private http: HttpClient, private messageService : MessageService) { }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<any>(this.url, cliente, httpOptions).pipe(
      tap((cliente: Cliente) => this.log(`added cliente`)),
      catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  sendCliente(cliente: Cliente): Observable<Cliente> {
    console.log(cliente);
    return this.http.post<any>(this.url+'/login', cliente, httpOptions).pipe(
      tap((cliente: Cliente) => this.log(`sent client`)),
      catchError(this.handleError<Cliente>('sendCliente'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

     
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);

      
      return of(result as T);
    };
  }

  /** Log a GeneroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('GeneroService: ' + message);
  }
}
