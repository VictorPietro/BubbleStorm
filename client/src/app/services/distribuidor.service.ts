import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Distribuidora } from '../models/Distribuidora';
import { Observable,  of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class DistribuidorService {
  private url = 'http://192.168.0.90:8080/distribuidores';

  constructor(private http: HttpClient, private messageService : MessageService ) { }

  addDistribuidor(distribuidor: Distribuidora): Observable<Distribuidora> {
    return this.http.post<any>(this.url, distribuidor, httpOptions).pipe(
      tap((distribuidor: Distribuidora) => this.log(`added Distribuidor`)),
      catchError(this.handleError<Distribuidora>('addDistribuidor'))
    );
  }

  sendDistribuidor(distribuidor: Distribuidora): Observable<Distribuidora> {
    return this.http.post<any>(this.url+'/login', distribuidor, httpOptions).pipe(
      tap((distribuidor: Distribuidora) => this.log(`sent Distribuidor`)),
      catchError(this.handleError<Distribuidora>('sendDistribuidor'))
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
    this.messageService.add('DistribuidorService: ' + message);
  }
}
