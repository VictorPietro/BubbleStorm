import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { Distribuidora } from '../models/Distribuidora';

@Injectable({
  providedIn: 'root'
})
export class DataService {

public data: string;
public clienteUser : Cliente = new Cliente();
public distribuidorUser : Distribuidora = new Distribuidora(); 

  constructor() { }
}
