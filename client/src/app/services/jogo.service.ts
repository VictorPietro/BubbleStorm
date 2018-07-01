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
  private url = 'http://localhost:8080/jogos';

  constructor(private http: HttpClient, private messageService : MessageService ) { }

  addJogo(jogo: Jogo): Observable<Jogo> {
    return this.http.post<any>(this.url, jogo, httpOptions).pipe(
      tap((jogo: Jogo) => this.log(`added jogo`)),
      catchError(this.handleError<Jogo>('addJogo'))
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
