import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/Usuario';

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
   

  ngOnInit() {
  }

  clickTipo(type : string){
    this.rota = type
  }

  teste(){
    console.log("Login: ", this.usuario.login);
    console.log("Senha: ", this.usuario.senha);
  }

}
