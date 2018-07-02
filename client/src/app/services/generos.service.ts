import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Genero } from '../models/Genero';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private generosUrl = 'http://192.168.0.90:8080/generos';  // URL to web api
 
  constructor(
    private http: HttpClient) { }
 
  /** GET generos from the server */
  getGeneros (): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.generosUrl)
      .pipe(
        tap(generos => this.log(`fetched heneros`)),
        catchError(this.handleError('getGeneros', []))
      );
  }

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
 
  }
}