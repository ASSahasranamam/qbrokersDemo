import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as CanvasJS from '../canvasjs.min';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css']
})
export class GraphViewComponent implements OnInit {

  data;
  symbolList: String[] = ['ZNM3', 'UBM3', 'ZFM3', 'ZBM3', 'ZTM3'];
  symbolSelected = "ZNM3";



  constructor(private httpClient: HttpClient) {

  }

  askDataPoints;
  bidDataPoints;
  filterDataAsk(symbol: string): any[] {
    let datareturn = []
    for (var i of this.data.filter(row => row.symbol === symbol)) {
      datareturn.push({ y: Number(i.ask), x: new Date(i.QRecTime), lineColor: "#36b34a" })
    }
    return datareturn;
  }

  filterDataBid(symbol: string): any[] {
    let datareturn = []
    for (var i of this.data.filter(row => row.symbol === symbol)) {
      datareturn.push({ y: Number(i.bid), x: new Date(i.QRecTime), lineColor:"#fddf0f" })
    }
    //datareturn = (datareturn)
    return datareturn;
  }

  selectedSymbol(details) {
    console.log(details.value)

    this.renderChart()
  }


  renderChart() {

    this.askDataPoints = this.filterDataAsk(this.symbolSelected);
    this.bidDataPoints = this.filterDataBid(this.symbolSelected);
    console.log(this.askDataPoints);

    let chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: String( "Bid & Ask Rates by Time for " + this.symbolSelected),
        fontColor: "#36b34a",
        fontWeight: "lighter",
        fontFamily: "tahoma",
        padding: 5

      },
      subtitles: [{
        text: "select and drag to zoom",
        fontFamily: "sans-serif",
        fontSize: 18,
        padding: 2



      }],
      axisY: [{
        title: "Price (in USD)",
        valueFormatString: "$##0.###00",
        includeZero: false,
        padding: 50


      }],
      axisX: [{
        title: "Quote Record - time",
        includeZero: false,
        valueFormatString: " dd:MMM HH:mm:ss	",
        padding: 20



      }],
      toolTip: {
        shared: "true"
      },
      legend: {
        cursor: "pointer"
      },
      data: [
        {
          type: "line",
          yValueFormatString: "###.### $",
          xValueFormatString: "DD MMM HH:MM:ss ",

          name: 'Bid Rates',
          showInLegend: true,
          dataPoints: this.bidDataPoints
        },

        {
          type: "line",
          name: 'Ask Rates',
          showInLegend: true,
          yValueFormatString: "###.### $",
          xValueFormatString: "DD MMM HH:MM:ss  ",

          dataPoints: this.askDataPoints
        }]
    });

    console.log('hello');
    chart.render();



  }

  ngOnInit() {

    this.httpClient.get("http://localhost:3000").subscribe(
      data => {
        console.log(data)
        this.data = data;

        //RenderChart
        this.renderChart()

      }, error => {
        console.log("Error", error);
      }
    );


    //
    // let y = 0;
    // for ( var i = 0; i < 10000; i++ ) {
    //   y += Math.round(5 + Math.random() * (-5 - 5));
    //   this.dataPoints.push({ y: y});
    // }



  }

  ngAfterInit() {


  }
}
