import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  cliente : Cliente;
  constructor(private dataService : DataService, private clienteService : ClienteService) { }

  ngOnInit() {
    this.cliente = this.dataService.clienteUser;
    
    console.log(this.cliente);
  }

}
