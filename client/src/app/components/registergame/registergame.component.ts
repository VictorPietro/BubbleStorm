import { Component, OnInit } from '@angular/core';
import { Jogo } from '../../models/Jogo';
import { Genero } from '../../models/Genero';

@Component({
  selector: 'app-registergame',
  templateUrl: './registergame.component.html',
  styleUrls: ['./registergame.component.css']
})
export class RegistergameComponent implements OnInit {

  jogo: Jogo = new Jogo();
  genero: Genero = new Genero();
  constructor() { }

  ngOnInit() {
  }

  teste() {
    console.log("Nome do jogo: ", this.jogo.nome);
    console.log("Preco do jogo: ", this.jogo.preco);
    console.log("Ano de lancamento do jogo: ", this.jogo.anoLancamento);
    console.log("Genero: ", this.jogo.genero);
    console.log("Genero cadastrado nome: ", this.genero.nomeGenero);
    console.log("Genero cadastrado descrição: ", this.genero.descricaoGenero);
  }

}
