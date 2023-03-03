import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DadosDeRelatorioComponent } from './pages/dados-de-relatorio/dados-de-relatorio.component';
import { DadosDaPropostaComponent } from './pages/dados-da-proposta/dados-da-proposta.component';
import { DevolutivaComponent} from './pages/devolutiva/devolutiva.component'

const routes: Routes =[
  {path: '', component: DevolutivaComponent },
  {path: 'devolutiva', component: DevolutivaComponent },
  { path: 'dados-da-proposta', component: DadosDaPropostaComponent },
  { path: 'dados-de-relatorio', component: DadosDeRelatorioComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
