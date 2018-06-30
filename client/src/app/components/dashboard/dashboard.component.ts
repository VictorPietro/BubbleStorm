import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/Genero';
import { GeneroService } from 'src/app/services/generos.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  generos: Genero[] = [];
 
  constructor(private generoService: GeneroService) { }
 
  ngOnInit() {
    this.getGeneros();
  }
 
  getGeneros(): void {
    this.generoService.getGeneros()
      .subscribe(heroes => this.generos)
  }
}