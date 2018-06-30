import { Contato } from '../models/Contato';
import { Endereco } from '../models/Endereco';
import { Distribuidora } from '../models/Distribuidora';

export class Usuario {
    id: number;
    nome: string;
    login: string;
    senha: string;
    isDistributor: boolean;
    contato: Contato;
    enderecos: Endereco[];
    distribuidora: Distribuidora;
}