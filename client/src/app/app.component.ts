import { Component } from '@angular/core';
import { RecordsService } from './records.service'
import { Genero } from 'src/app/models/Genero';
import { GeneroService } from 'src/app/services/generos.service'
import { GenerosComponent } from 'src/app/components/generos/generos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //records = {}

  title = 'Bubble Store';

  /*constructor(private myService: RecordsService) {}

  ngOnInit(){
    this.records = this.myService.getData()
  }*/
}
