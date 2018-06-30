import { Usuario } from '../models/Usuario';
import { Compra } from '../models/Compra';

export class Cliente {
    cpf: number;
    dataNascimento: Date;
    compras: Compra[];
}