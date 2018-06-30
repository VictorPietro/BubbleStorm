import { Usuario } from '../models/Usuario';

export class Endereco {
    id: number;
    rua: string;
    numero: number;
    bairro: string;
    cep: number;
    cidade: string;
    estado: string;
    pais: string;
    usuario: Usuario;
}