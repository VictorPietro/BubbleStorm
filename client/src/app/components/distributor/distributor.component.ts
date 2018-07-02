import { Component, OnInit } from '@angular/core';
import { JogoService } from '../../services/jogo.service'
import { Jogo } from '../../models/Jogo';
import { DistribuidorService } from '../../services/distribuidor.service'
import { Distribuidora } from '../../models/Distribuidora'

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {

  jogo: Jogo = new Jogo();
  destribuidora: Distribuidora = new Distribuidora();
  jogos: Jogo[];

  filter:string;

  constructor(
    private jogoService: JogoService,
    private distribuidorService: DistribuidorService) { }

  ngOnInit() {
    this.getJogos();
  }

  teste(){
    console.log("Filter: ", this.filter);
  }

  deletarJogo(): void{
    //this.jogo.id = '5b3886f37099b236889c862d';
    this.jogoService.deleteJogo(this.jogo).subscribe();
  }

  getJogos(): void {
    this.destribuidora.id = '5b384ff97099b236889c85ee';
    this.distribuidorService.getDistribuidorJogos(this.destribuidora.id)
    .subscribe(jogo =>{this.jogos = jogo});
  }
}
