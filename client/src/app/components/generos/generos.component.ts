import { Component, OnInit } from '@angular/core';

import { Genero } from 'src/app/models/Genero';
import { GeneroService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  selectedGenero: Genero;

  generos: Genero[];

  constructor(private generoService: GeneroService) { }

  ngOnInit() {
    this.getGeneros();
  }

  onSelect(genero: Genero): void {
    this.selectedGenero = genero;
  }

  getGeneros(): void {
    this.generoService.getGeneros()
      .subscribe(generos => this.generos = generos);
  }
  add(nomeGenero: string): void {
    nomeGenero = nomeGenero.trim();
    if (!nomeGenero) { return; }
    this.generoService.addGenero({ nomeGenero } as Genero)
      .subscribe(genero => {
        this.generos.push(genero);
      });
  }
 
  delete(genero: Genero): void {
    this.generos = this.generos.filter(h => h !== genero);
    this.generoService.deleteGenero(genero).subscribe();
  }
 
}