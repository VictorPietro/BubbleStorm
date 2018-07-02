import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Distribuidora } from '../models/Distribuidora';
import { Observable,  of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Jogo } from '../models/Jogo';

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

  /*getDistribuidorJogos(distribuidor: Distribuidora): Observable<Distribuidora> {
    return this.http.post<any>(this.url+'/jogos', distribuidor, httpOptions).pipe(
      tap((distribuidor: Distribuidora) => this.log(`got distribuidor jogos`)),
      catchError(this.handleError<Distribuidora>('getDistribuidorJogos'))
    );
  }*/

  //GET genero by id. Will 404 if id not found 
  getDistribuidorJogos(id: string): Observable<Jogo[]> {
    const urlFull = `${this.url}/jogos/${id}`;
    return this.http.get<Jogo[]>(urlFull)
      .pipe(
        tap(_ => this.log(`fetched genero id=${id}`)),
        catchError(this.handleError<Jogo[]>(`getDistribuidorJogos id=${id}`))
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
