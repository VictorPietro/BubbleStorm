import { Component, OnInit } from '@angular/core';
import { Jogo } from '../../models/Jogo';
import { Genero } from '../../models/Genero';
import { GeneroService } from '../../services/generos.service';
import { JogoService } from '../../services/jogo.service';
import { filter } from 'rxjs/operators';


@Component({
    selector: 'app-registergame',
    templateUrl: './registergame.component.html',
    styleUrls: ['./registergame.component.css']
})
export class RegistergameComponent implements OnInit {

    jogo: Jogo = new Jogo();
    genero: Genero = new Genero();
    generos: Genero[];
    entrada;

    constructor(
        private generoService: GeneroService,
        private jogoService: JogoService
    ) {
        this.jogo.generos = new Array();
    }

    ngOnInit() {
        this.getGeneros();
    }

    adicionarGeneroJogo(genero: Genero) {
        if (!this.jogo.generos.includes(genero)) {
            this.jogo.generos.push(genero);
        }
    }

    removerGeneroJogo(genero: Genero) {
        this.jogo.generos = this.jogo.generos.filter(g => g !== genero);
    }

    getGeneros(): void {
        this.generoService.getGeneros()
            .subscribe(generos => this.generos = generos);
    }

    addGenero(): void {
        this.generoService.addGenero(this.genero)
            .subscribe(genero => {
                this.generos.push(genero);
                alert("Cadastro realizado com sucesso!");
            });
    }

    addJogo(): void {
        this.jogoService.addJogo(this.jogo)
            .subscribe(jogo => {
                alert("Cadastro realizado com sucesso!");
            });
    }

    delete(genero: Genero): void {
        this.generos = this.generos.filter(h => h !== genero);
        this.generoService.deleteGenero(genero).subscribe();
    }
}