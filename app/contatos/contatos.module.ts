import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatosListaComponent } from './contato-lista.component';
import { ContatosDetalheComponent } from './contato-detalhe.component';
import { ContatoBuscaComponent } from './contato-busca.component';

import { ContatoRoutingModule } from './contato-routing.module';

import { ContatoService } from './contato.service';

@NgModule({
  imports:[
      CommonModule,
      ContatoRoutingModule,
      FormsModule,
  ],
    declarations:[
    ContatosListaComponent,
    ContatosDetalheComponent,
    ContatoBuscaComponent,
  ],
  exports:[
    ContatosListaComponent,
    ContatoBuscaComponent,
  ],
  providers:[
    ContatoService,
  ]
})

export class ContatosModule {}
