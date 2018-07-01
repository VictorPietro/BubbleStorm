import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Jogo } from '../models/Jogo';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private url = 'http://192.168.0.90:8080/jogos';

  jogo = new Jogo();

  constructor(private http: HttpClient, private messageService : MessageService ) { }

  addJogo(jogo: Jogo): Observable<Jogo> {
    return this.http.post<any>(this.url, jogo, httpOptions).pipe(
      tap((jogo: Jogo) => this.log(`added jogo`)),
      catchError(this.handleError<Jogo>('addJogo'))
    );
  }

  deleteJogo (jogo: Jogo | number): Observable<Jogo> {
    const id = typeof jogo === 'number' ? jogo : jogo.id;
    const url = `${this.url}/${id}`;
 
    return this.http.delete<Jogo>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted genero id=${id}`)),
      catchError(this.handleError<Jogo>('deleteGenero'))
    );
  }

  getJogos(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.url)
      .pipe(
        tap(jogos => this.log(`fetched jogos`)),
        catchError(this.handleError('getJogos', []))
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
