import { Usuario } from '../models/Usuario';
import { Compra } from '../models/Compra';

export class Cliente extends Usuario{
    cpf: number;
    dataNascimento: number;
    compras: Compra[];
}