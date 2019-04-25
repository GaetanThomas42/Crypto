import { Component, OnInit, Input } from '@angular/core';
import { Market } from '../models/market.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  @Input() market: Market;


  constructor() { }

  ngOnInit() {
  }

}
