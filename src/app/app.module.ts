import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { MenuComponent } from './menu/menu.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { CreatorsComponent } from './creators/creators.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContatoComponent } from './contato/contato.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    MenuComponent,
    SolucoesComponent,
    PortifolioComponent,
    CreatorsComponent,
    ClientesComponent,
    ContatoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
