import { Genero } from '../models/Genero';
import { Distribuidora } from '../models/Distribuidora';

export class Jogo {
    id: number;
    nome: string;
    preco: number;
    anoLancamento: number;
    distribuidora: Distribuidora;
    genero: Genero;
}