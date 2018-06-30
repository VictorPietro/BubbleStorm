import { Cliente } from '../models/Cliente';
import { Fatura } from '../models/Fatura';

export class Compra {
    id: number;
    statusDaCompra: number;
    valorTotal: number;
    quantidadeItens: number;
    fatura: Fatura;
    cliente: Cliente;
}