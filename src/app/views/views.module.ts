import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
//import { JwtInterceptor, ErrorInterceptor } from './../_helpers';
import { ViewsRoutes } from './views.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ServicostipoComponent } from './servicostipo/servicostipo.component';
import { ServicostiponovoComponent } from './servicostiponovo/servicostiponovo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicosComponent } from './servicos/servicos.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ViewsRoutes), 
    MaterialModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule 
  ],
  declarations: [
  FuncionariosComponent,
  ServicostipoComponent,
  ServicostiponovoComponent,
  ServicosComponent,
  ProfissionaisComponent,
  AgendaComponent,
  FinanceiroComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
//   ]
})

export class ViewsModule { }
