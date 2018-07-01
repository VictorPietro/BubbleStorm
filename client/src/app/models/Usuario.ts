import { Contato } from '../models/Contato';
import { Endereco } from '../models/Endereco';
import { Distribuidora } from '../models/Distribuidora';

export class Usuario {
    id: number;
    nome: string;
    login: string;
    senha: string;
    contato: Contato;
    endereco: Endereco;
}