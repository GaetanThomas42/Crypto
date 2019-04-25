import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  MarketsComponent
} from './markets.component';
import {
  MarketComponent
} from '../market/market.component';

describe('MarketsComponent', () => {
  let component: MarketsComponent;
  let fixture: ComponentFixture < MarketsComponent > ;
  let element: any;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [MarketsComponent, MarketComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsComponent);
    component = fixture.componentInstance;
    component.markets = [{
        market: 'Test',
        price: 'test0',
        volume: 1000
      },
      {
        market: 'Test',
        price: 'test0',
        volume: 1000
      },
      {
        market: 'Test',
        price: 'test0',
        volume: 1000
      }
    ];
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 markets', () => {
    expect(element.querySelectorAll('app-market').length).toEqual(3);
  });

});
