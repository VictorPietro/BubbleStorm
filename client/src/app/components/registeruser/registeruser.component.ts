import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Endereco } from '../../models/Endereco';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Distribuidora } from '../../models/Distribuidora';
import { Cliente } from '../../models/Cliente';
import { Contato } from '../../models/Contato'
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  usuario: Usuario = new Usuario();
  endereco: Endereco = new Endereco();
  distribuidora: Distribuidora = new Distribuidora();
  cliente: Cliente = new Cliente();
  contato: Contato = new Contato();
  rota: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.rota = this.dataService.data;
    console.log(this.rota);
  }

  teste() {
    console.log("Login: ", this.usuario.login);
    console.log("Senha: ", this.usuario.senha);
    console.log("Nome: ", this.usuario.nome);
    /*if (usuario.isDistribuidora == false) {
      console.log(this.cliente.dataNascimento);
      console.log(this.cliente.cpf);
    } else {
      console.log(this.distribuidora.data)
          }      */
    console.log("Pais: ", this.endereco.pais);
    console.log("Cep: ", this.endereco.cep);
    console.log("Cidade: ", this.endereco.cidade);
    console.log("Estado: ", this.endereco.estado);
    console.log("Rua: ", this.endereco.rua);
    console.log("Numero: ", this.endereco.numero);
    console.log("Email: ", this.contato.email);
    console.log("Telefone: ", this.contato.telefone);
  }

}
