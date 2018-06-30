import { Jogo } from '../models/Jogo';

export class Genero {
    id: number;
    nomeGenero: string;
    descricaoGenero: string;
    jogos: Jogo[];
}