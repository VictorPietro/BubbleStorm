import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario = new Usuario();

   rota : string
  constructor() { }

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
