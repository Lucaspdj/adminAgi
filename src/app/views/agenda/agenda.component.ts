import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

let cont = 0;

declare var $: any;
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
declare interface TableWithCheckboxes {
    id?: number;
    ischecked?: boolean;
    product_name: string;
    type: string;
    quantity: number;
    price: any;
    amount: string;
}
export interface TableData2 {
  headerRow: string[];
  dataRows: TableWithCheckboxes[];
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData2;
    public tableData3: TableData;
    closeResult = '';
    ngOnInit() {

        this.tableData1 = {
            headerRow: [ '#', 'Estabelecimento', 'Profissional','Serviço','Dia', 'Mês', 'Horário inicio', 'Horário fim','Ações'],
            dataRows: [
                ['1', 'TESTE','TESTE','TESTE','04', 'JUNHO', '10:30', '15:25','btn-link'],
                ['2', 'TESTE','TESTE','TESTE','04', 'JUNHO', '10:30', '15:25','btn-link'],
                ['3', 'TESTE','TESTE','TESTE','04', 'JUNHO', '10:30', '15:25','btn-link'],
            ]
         };
    }


    getTotal() {
        let total = 0;
        for (let i = 0; i < this.tableData3.dataRows.length; i++) {
            const integer = parseInt(this.tableData3.dataRows[i][8], 10);
            total += integer;
        }
        return total;
    };

    deletesweetalert(){
      Swal.fire({
        title: 'Você tem certeza?',
        text: 'Você não conseguira recuperar esse serviço',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Sim, excluir!',
        cancelButtonText: 'Não, cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Excluído!',
            'O tipo do serviço foi exluído',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'O tipo do serviço foi mantido',
            'error'
          )
        }
      })
    }

    desativar(){
      Swal.fire({
        title: 'Você tem certeza?',
        text: 'Quer desativar essa agenda?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Sim, desativar!',
        cancelButtonText: 'Não, cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Desativado!',
            'A agenda foi desativada',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'A agenda foi mantida',
            'error'
          )
        }
      })
    }

    prioridade(){
      Swal.fire({
        title: 'Você tem certeza?',
        text: 'Deseja solicitar prioridade?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, solicitar!',
        cancelButtonText: 'Não, cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Solicitado!',
            'A prioridade foi solicitada',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'Nada foi solicitado',
            'error'
          )
        }
      })
    }

    success(){
      Swal.fire(
        'Terminado!',
        'Você cadastrou com sucesso!',
        'success'
      )
    }
    formodal(){
      Swal.fire('Any fool can use a computer')
    }
   
    
    constructor(private modalService: NgbModal) {}

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = ``;
      });
    }

    addtelefone(){
        if (cont == 0){
          (<HTMLInputElement>document.getElementById('numero1')).type = 'text';
          cont = (cont + 1);
        }
        else if (cont == 1){
          (<HTMLInputElement>document.getElementById('numero2')).type = 'text';
          cont = (cont + cont);
        }
        else if (cont == 2){
          (<HTMLInputElement>document.getElementById('numero3')).type = 'text';
          cont = (cont + 1);
        }
        else if (cont == 3){
          (<HTMLInputElement>document.getElementById('numero4')).type = 'text';
          cont = (cont + 1);
        }
    }

    reset(){
      cont = 0;
    }

  }
