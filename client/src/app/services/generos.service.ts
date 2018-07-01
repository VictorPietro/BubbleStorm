import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Genero } from '../models/Genero';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private generosUrl = 'http://localhost:8080/generos';  // URL to web api
 
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
 
  /** GET generos from the server */
  getGeneros (): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.generosUrl)
      .pipe(
        tap(generos => this.log(`fetched heneros`)),
        catchError(this.handleError('getGeneros', []))
      );
  }
 
  /** GET genero by id. Return `undefined` when id not found 
  getGeneroNo404<Data>(id: number): Observable<Genero> {
    const url = `${this.generosUrl}/?id=${id}`;
    return this.http.get<Genero[]>(url)
      .pipe(
        map(generos => generos[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} genero id=${id}`);
        }),
        catchError(this.handleError<Genero>(`getGenero id=${id}`))
      );
  }*/
 
  /** GET genero by id. Will 404 if id not found 
  getGenero(id: number): Observable<Genero> {
    const url = `${this.generosUrl}/${id}`;
    return this.http.get<Genero>(url).pipe(
      tap(_ => this.log(`fetched genero id=${id}`)),
      catchError(this.handleError<Genero>(`getGenero id=${id}`))
    );
  }*/
 
  /* GET generos whose name contains search term 
  searchGeneros(term: string): Observable<Genero[]> {
    if (!term.trim()) {
      // if not search term, return empty genero array.
      return of([]);
    }
    return this.http.get<Genero[]>(`${this.generosUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found generos matching "${term}"`)),
      catchError(this.handleError<Genero[]>('searchGeneros', []))
    );
  }*/
 
  //////// Save methods //////////
 
  /** POST: add a new genero to the server */
  addGenero (genero: Genero): Observable<Genero> {
    return this.http.post<any>(this.generosUrl, genero, httpOptions).pipe(
      tap((genero: Genero) => this.log(`added genero`)),
      catchError(this.handleError<Genero>('addGenero'))
    );
  }
 
  /** DELETE: delete the genero from the server */
  deleteGenero (genero: Genero | number): Observable<Genero> {
    const id = typeof genero === 'number' ? genero : genero.id;
    const url = `${this.generosUrl}/${id}`;
 
    return this.http.delete<Genero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted genero id=${id}`)),
      catchError(this.handleError<Genero>('deleteGenero'))
    );
  }
 
  /** PUT: update the genero on the server */
  updateGenero (genero: Genero): Observable<any> {
    return this.http.put(this.generosUrl, genero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${genero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a GeneroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('GeneroService: ' + message);
  }
}