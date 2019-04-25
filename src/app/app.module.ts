import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoComponent } from './crypto/crypto.component';
import { MarketsComponent } from './markets/markets.component';
import { MarketComponent } from './market/market.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCryptoComponent } from './search-crypto/search-crypto.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    MarketsComponent,
    MarketComponent,
    SearchCryptoComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
