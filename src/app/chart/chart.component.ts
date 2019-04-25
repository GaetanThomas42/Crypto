import { Component, OnInit, Input } from '@angular/core';
import { Market } from '../models/market.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  @Input() markets: Market[];

  constructor() {}

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any;

  ngOnInit() {
    const prices = [];
    const volumes = [];

    for (const market of this.markets) {
      this.barChartLabels.push(market.market);
      prices.push(market.price);
      volumes.push(market.volume  );
    }

    const values = [
      {
        data: prices, label: ['Prices']
      },
      {
        data: volumes, label: ['Volumes']
      }
    ];

    this.barChartData = values;
  }

}
