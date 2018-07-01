import { Component, OnInit } from '@angular/core';
import { JogoService } from '../../services/jogo.service'
import { Jogo } from '../../models/Jogo';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {

  jogo: Jogo = new Jogo();
  jogos: Jogo[];

  filter:string;

  constructor(private jogoService: JogoService) { }

  ngOnInit() {
    this.getJogos;
  }

  teste(){
    console.log("Filter: ", this.filter);
  }

  deletarJogo(): void{
    //this.jogo.id = '5b3886f37099b236889c862d';
    this.jogoService.deleteJogo(this.jogo).subscribe();
  }

  getJogos(): void {
    this.jogoService.getJogos()
      .subscribe(jogos => this.jogos = jogos);
  }
}
