import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Cliente } from '../../models/Cliente';
import { Jogo } from '../../models/Jogo';
import { JogoService } from '../../services/jogo.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  filter: string;
  cliente: Cliente;
  jogos: Jogo[];
  show: Jogo[];
  carrinho: Jogo[];
  total: number;


  constructor(private dataService: DataService, private jogoService: JogoService,
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = this.dataService.clienteUser;
    this.getJogos();
    this.carrinho = new Array();
    this.total = 0;
    console.log(this.cliente);
  }

  filtrar(filter) {
    if (filter == '') {
      this.show = this.jogos;
    } else {
      this.show.filter(jogo => {
        if (jogo.nome.includes(filter)) {
          console.log(jogo.nome);
          console.log(filter);
          return jogo;
        }
      });
      console.log(this.show);
    }
  }

  addCarrinho(jogo: Jogo) {
    this.total += jogo.preco;
    this.carrinho.push(jogo);
  }

  rmCarrinho(jogo: Jogo) {
    this.total -= jogo.preco;
    this.carrinho = this.carrinho.filter(j => j !== jogo);
  }

  getJogos(): void {
    this.jogoService.getJogos()
      .subscribe(jogos => {
        this.jogos = jogos;
        this.show = jogos;
      });
  }

}
