import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})     

@Injectable()
export class HomeComponent implements OnInit {

  rota : string
  url1 = "http://192.168.0.10:8080/auth";
  url2 = "http://localhost:8080";

  /*sem const*/httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {
    console.log("***")
    this.http.get<any>(this.url2)
  }

  ngOnInit() {
  }

  clickTipo(type : string){
    this.rota = type
  }

}
