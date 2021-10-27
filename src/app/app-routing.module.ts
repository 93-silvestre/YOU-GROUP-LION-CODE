import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteSolucoesComponent } from './cliente-solucoes/cliente-solucoes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContatoComponent } from './contato/contato.component';
import { CreatorsComponent } from './creators/creators.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { SolucoesComponent } from './solucoes/solucoes.component';

const routes: Routes = [

  {path: '', redirectTo: 'quem-somos', pathMatch: 'full'},

  {path:'quem-somos', component: QuemSomosComponent},
  {path:'solucoes', component: SolucoesComponent},
  {path:'portifolio', component: PortifolioComponent},
  {path:'creators', component: CreatorsComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'contato', component: ContatoComponent},
  {path: 'cliente-solucoes', component: ClienteSolucoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
