import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const generos = [
      { id: 11, nomeGenero: 'Ação' },
      { id: 12, nomeGenero: 'Aventura' },
      { id: 13, nomeGenero: 'Esportes' },
      { id: 14, nomeGenero: 'Estratégia' },
      { id: 15, nomeGenero: 'Tiro' }
    ];
    return {generos};
  }
}