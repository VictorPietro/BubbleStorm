import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/Usuario';
import { DataService } from '../../services/data.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../../services/message.service';
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

  usuario: Usuario = new Usuario();
  cliente: Cliente = new Cliente();
  distribuidora: Distribuidora = new Distribuidora();
  loggedUser: Cliente = new Cliente();
  loggedDistr: Distribuidora = new Distribuidora();

  rota: string

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private messageService: MessageService,
    private clienteService: ClienteService,
    private distribuidorService: DistribuidorService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dataService.data = this.rota;
    if(this.rota == 'user'){
      this.dataService.clienteUser = this.loggedUser;
    }else{
      this.dataService.distribuidorUser = this.loggedDistr;
    }
    
  }

  clickTipo(type: string) {
    this.rota = type;
  }

  mandarLogin() {
    var that = this;

    if (this.rota == 'user') {
      this.cliente.login = this.usuario.login;
      this.cliente.senha = this.usuario.senha;
      this.clienteService.sendCliente(this.cliente).subscribe(c => {
        that.loggedUser = c;
      });
    } else {
      this.distribuidora.login = this.usuario.login;
      this.distribuidora.senha = this.usuario.senha;
      this.distribuidorService.sendDistribuidor(this.distribuidora).subscribe(d => {
        that.loggedDistr = d;
      });;
    }
  }
}
