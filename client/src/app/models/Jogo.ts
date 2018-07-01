import { Genero } from '../models/Genero';
import { Distribuidora } from '../models/Distribuidora';

export class Jogo {
    id: string;
    nome: string;
    preco: number;
    anoLancamento: number;
    distribuidora: Distribuidora;
    public generos: Genero[];
}