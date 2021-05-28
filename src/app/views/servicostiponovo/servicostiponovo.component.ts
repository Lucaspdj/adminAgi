import { Component, OnInit } from '@angular/core';

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
  selector: 'app-servicostiponovo',
  templateUrl: './servicostiponovo.component.html',
  styleUrls: ['./servicostiponovo.component.css']
})

export class ServicostiponovoComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData2;
    public tableData3: TableData;
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
}
