import { Compra } from '../models/Compra';

export class Fatura {
    id: number;
    metodoPagamento: string;
    valorTotal: number;
    statusFatura: number;
    compra: Compra;
}