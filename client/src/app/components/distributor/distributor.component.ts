import { Component, OnInit } from '@angular/core';
import { JogoService } from '../../services/jogo.service'
import { Jogo } from '../../models/Jogo';
import { DataService } from '../../services/data.service';
import { Distribuidora } from '../../models/Distribuidora';
import { filter } from 'rxjs/operators';
import { DistribuidorService } from '../../services/distribuidor.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {

  jogo: Jogo = new Jogo();
  jogos: Jogo[];
  distribuidor: Distribuidora = new Distribuidora();
  router : Router;

  filter:string;

  constructor(private jogoService: JogoService,private dataService: DataService,
             private distribuidorService: DistribuidorService) { }

  ngOnInit() {
    this.distribuidor = this.dataService.distribuidorUser;
    this.getJogos();    
    console.log(this.distribuidor);
  }

  teste(){
    console.log("Filter: ", this.filter);
  }

  deletarJogo(jogo : Jogo): void{
    this.jogos = this.jogos.filter(h => h !== jogo);
    this.jogoService.deleteJogo(this.jogo).subscribe();
  }
  
  getJogos(): void {
    this.distribuidorService.getDistribuidorJogos(this.distribuidor.id)
    .subscribe(jogo =>{this.jogos = jogo});
  }
}
