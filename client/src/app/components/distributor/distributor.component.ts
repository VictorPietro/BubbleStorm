import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {


  filter:string;

  constructor() { }

  ngOnInit() {
  }

  teste(){
    console.log("Filter: ", this.filter);
  }

}
