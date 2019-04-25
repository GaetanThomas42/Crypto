import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketComponent } from './market.component';
import { MarketsComponent } from '../markets/markets.component';

describe('MarketComponent', () => {
  let component: MarketComponent;
  let fixture: ComponentFixture<MarketComponent>;
  let element: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketComponent);
    component = fixture.componentInstance;
    component.market = {market: 'Test', price: 'test0', volume: 1000};
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correctly title', () => {
    expect(element.querySelector('h3').textContent).toEqual('Test');
  });

  it('should have correct price', () => {
    expect(element.querySelector('#price').textContent).toContain('test0');
  });

  it('should have correct volume', () => {
    expect(element.querySelector('#volume').textContent).toContain(1000);
  });



});
