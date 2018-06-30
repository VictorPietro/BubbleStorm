import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/Usuario';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})     

@Injectable()
export class HomeComponent implements OnInit {

  rota : string
  
  constructor() {  }
  usuario: Usuario = new Usuario();
   rota : string
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dataService.data = this.rota; 
 }

  clickTipo(type : string){
    this.rota = type
  }

  teste(){
    console.log("Login: ", this.usuario.login);
    console.log("Senha: ", this.usuario.senha);
  }

}
