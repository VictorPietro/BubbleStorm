import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  filter: string;

  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log("Filter: ", this.filter);
  }

}
