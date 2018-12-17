import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { HttpClient } from "@angular/common/http";
import * as CanvasJS from '../canvasjs.min';
import { Config, STYLE, THEME } from 'ngx-easy-table/lib';



import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";


const ELEMENT_DATA = [


];



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  symbolList: String[]= ['ZNM3', 'UBM3', 'ZFM3', 'ZBM3', 'ZTM3'];
  symbolSelected = "ZNM3";
  data;
  configuration ={
    searchEnabled: true,
    headerEnabled: true,
    orderEnabled: true,
    orderEventOnly: false,
    globalSearchEnabled: true,
    paginationEnabled: true,
    exportEnabled: false,
    clickEvent: false,
    selectRow: false,
    selectCol: false,
    selectCell: false,
    rows: 10,
    additionalActions: false,
    serverPagination: false,
    isLoading: false,
    detailsTemplate: false,
    groupRows: false,
    paginationRangeEnabled: true,
    collapseAllRows: false,
    checkboxes: false,
    resizeColumn: true,
    fixedColumnWidth: false,
    horizontalScroll: false,
    draggable: false,
    logger: false,
    showDetailsArrow: false,
    showContextMenu: false,
    persistState: false,
    paginationMaxSize: 5,
    tableLayout: {
      style: 'normal', // or big or tiny
      theme: 'normal', // or dark
      border: true,
      hover: true,
      striped: false
    }
  };

  columns = [
    { key: "QRecTime", title: "QRecTime"},
    { key: 'symbol', title: 'symbol' },
    { key: 'bid', title: 'bid' },
    { key: 'ask', title: 'ask' },
    { key: 'bsize', title: 'bsize' },
    { key: 'asize', title: 'asize' },

  ];
  constructor(private httpClient: HttpClient){

  }




  ngOnInit() {
    let datareturn = []

    this.httpClient.get("http://localhost:3000").subscribe(
      data => {
        console.log(data)
        this.data = data;
      },error => {
        console.log("Error", error);
      }
    );

  }



}
