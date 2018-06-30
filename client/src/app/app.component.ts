import { Component } from '@angular/core';
import { RecordsService } from './records.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  records = {}

  constructor(private myFirstService: RecordsService){
    
  }

  getData(){
    console.log(this.records = this.myFirstService.getData())
  }

  ngOnInit(){
  }
}
