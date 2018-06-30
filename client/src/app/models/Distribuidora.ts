import { Usuario } from '../models/Usuario';
import { Jogo } from '../models/Jogo';

export class Distribuidora {
    cnpj: number;
    usuario: Usuario;
    jogosDistribuidos: Jogo[];
}