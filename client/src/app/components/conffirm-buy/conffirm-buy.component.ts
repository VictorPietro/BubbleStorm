import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conffirm-buy',
  templateUrl: './conffirm-buy.component.html',
  styleUrls: ['./conffirm-buy.component.css']
})
export class ConffirmBuyComponent implements OnInit {

  constructor() { }

  tipoPgto: string

  ngOnInit() {

  }

  clickTipo(tipo: string) {
    this.tipoPgto = tipo;
  }

  pagamento() {
    //this.messageService.add('VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA DE PAGAMENTO EM BREVE...');
    if (this.tipoPgto == 'boleto') {
      alert("Pagamento via Boleto realizado!");
    } else {
      alert("Pagamento via Cartão de Crédito realizado!");
    }
  }
}

