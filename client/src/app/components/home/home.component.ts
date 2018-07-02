import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/Usuario';
import { DataService } from '../../services/data.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/Cliente';
import { Distribuidora } from '../../models/Distribuidora'
import { DistribuidorService } from '../../services/distribuidor.service'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  private usuarioUrl = 'http://192.168.0.90:8080/clientes/login';
  private distribuidorUrl = 'http://192.168.0.90:8080/clientes';

  usuario: Usuario = new Usuario();
  cliente: Cliente = new Cliente();
  distribuidora: Distribuidora = new Distribuidora();

  rota: string

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private clienteService: ClienteService,
    private distribuidorService: DistribuidorService ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dataService.data = this.rota;
  }

  clickTipo(type: string) {
    this.rota = type;
  }

  mandarLogin(){
    if(this.rota == 'user'){
      this.cliente.login = this.usuario.login;
      this.cliente.senha = this.usuario.senha;
      this.clienteService.sendCliente(this.cliente).subscribe(cliente => {
        alert("Login realizado com sucesso!");
      });;
    } else {
      this.distribuidora.login = this.usuario.login;
      this.distribuidora.senha = this.usuario.senha;
      this.distribuidorService.sendDistribuidor(this.distribuidora).subscribe(distribuidora => {
        alert("Login realizado com sucesso!");
      });;
    }
  }
}
