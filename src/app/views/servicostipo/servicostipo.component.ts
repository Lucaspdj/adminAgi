import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

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
  selector: 'app-servicostipo',
  templateUrl: './servicostipo.component.html',
  styleUrls: ['./servicostipo.component.css']
})

export class ServicostipoComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData2;
    public tableData3: TableData;
    closeResult = '';
    ngOnInit() {

        this.tableData1 = {
            headerRow: [ '#', 'Nome', 'Descrição', 'Ativo', 'Status', 'Tipo', 'Ações'],
            dataRows: [
                ['1', 'TESTE', 'TESTE', 'TESTE', 'TESTE', 'TESTE', 'btn-link'],
                ['2', 'TESTE', 'TESTE', 'TESTE', 'TESTE', 'TESTE', 'btn-link'],
                ['3', 'TESTE', 'TESTE', 'TESTE', 'TESTE', 'TESTE', 'btn-link'],
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

    formodal(){
      Swal.fire('Any fool can use a computer')
    }
   
    
    constructor(private modalService: NgbModal) {}

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
    }
}
