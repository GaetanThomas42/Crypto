import { Component, OnInit, Input } from '@angular/core';
import { Market } from '../models/market.model';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  @Input() markets: Market[];
  constructor() { }

  ngOnInit() {
    // Sort by price
    this.markets.sort((a, b) => (a.volume < b.volume) ? 1 : ((b.volume < a.volume) ? -1 : 0));
  }

  }

