import { Usuario } from '../models/Usuario';
import { Jogo } from '../models/Jogo';

export class Distribuidora extends Usuario{
    cnpj: number;
    usuario: Usuario;
    jogosDistribuidos: Jogo[];
}