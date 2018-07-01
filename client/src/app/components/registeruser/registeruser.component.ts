import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Endereco } from '../../models/Endereco';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Distribuidora } from '../../models/Distribuidora';
import { Cliente } from '../../models/Cliente';
import { Contato } from '../../models/Contato'
import { DataService } from '../../services/data.service';
import { ClienteService } from '../../services/cliente.service';
import { DistribuidorService } from '../../services/distribuidor.service';
import { RouterModule, Routes } from '@angular/router';

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
  dataTratada: Date = new Date();
  rota: string;

  constructor(
    private dataService: DataService,
    private clienteService: ClienteService,
    private distribuidorService: DistribuidorService) { }

  ngOnInit() {
    this.rota = this.dataService.data;
    if (this.rota == null) {
      this.rota = 'user'
    }
  }

  teste() {
    this.cliente.login = this.usuario.login;
    this.cliente.senha = this.usuario.senha;
    this.clienteService.sendCliente(this.cliente);
  }



  salvarCliente(){
    this.cliente.login = this.usuario.login;
    this.cliente.senha = this.usuario.senha;
    this.cliente.nome = this.usuario.nome;

    //this.cliente.dataNascimento = this.dataTratada.getTime();
    this.cliente.dataNascimento = null;

    this.cliente.contato = this.contato;
    this.cliente.endereco = this.endereco;

      this.clienteService.addCliente(this.cliente)
      .subscribe(cliente => {
        alert("Cadastrado realizado com sucesso!");
      });    
  }

  salvarDistribuidor(){
    this.distribuidora.login = this.usuario.login;
    this.distribuidora.senha = this.usuario.senha;
    this.distribuidora.nome = this.usuario.nome;

    this.distribuidora.contato = this.contato;
    this.distribuidora.endereco = this.endereco;

    this.distribuidorService.addDistribuidor(this.distribuidora)
      .subscribe(distribuidora => {
        alert("Cadastro realizado com sucesso!");
      });
  }

  cadastrar(){
    if (this.rota == 'user') {
      this.salvarCliente();
    } else {
      this.salvarDistribuidor();
    }
    //this.router.navigate(['/home']);
  }

}
