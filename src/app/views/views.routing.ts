import { Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ServicostipoComponent } from './servicostipo/servicostipo.component';
import { ServicostiponovoComponent } from './servicostiponovo/servicostiponovo.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';

export const ViewsRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'funcionario/home',
        component: FuncionariosComponent
    }]
},
{
  path: '',
  children: [ {
    path: 'servicostipo',
    component: ServicostipoComponent
}]
},
{
  path: '',
  children: [ {
    path: 'servicostiponovo',
    component: ServicostiponovoComponent
}]
},
{
  path: '',
  children: [ {
    path: 'profissionais',
    component: ProfissionaisComponent
}]
},
{
  path: '',
  children: [ {
    path: 'agenda',
    component: AgendaComponent
}]
},
{
  path: '',
  children: [ {
    path: 'financeiro',
    component: FinanceiroComponent
}]
},
{
  path: '',
  children: [ {
    path: 'servicos',
    component: ServicosComponent
}]
}
];