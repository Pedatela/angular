import { InMemoryDbService } from  'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {

  createDb(): {} {

    let contatos: Contato[] = [
      {id: 1,nome:'Fulano',email:'email',telefone:'telefone'},
      {id: 2,nome:'Seu Madruga',email:'madrugaseu@email.com',telefone:'33135050'},
      {id: 3,nome:'Bob Esponja',email:'bob@email.com',telefone:'45612378'},
    ];
      return {contatos};
  }

}
