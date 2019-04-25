import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search-crypto',
  templateUrl: './search-crypto.component.html',
  styleUrls: ['./search-crypto.component.css']
})
export class SearchCryptoComponent implements OnInit {

  // output crypto & change
  @Output() emitter = new EventEmitter();

  cryptoName: 'btc';
  cryptos = ['btc', 'eth', 'ltc', 'xrp', 'eos', 'bnb', 'bch', 'xml', 'trx', 'usdt'];

  cryptoChange = 'eur';
  changes = ['eur', 'usd', 'gbp', 'inr', 'aud', 'cad', 'jpy'];

  cryptoInput: string;
  changeInput: string;

  constructor() {}

  ngOnInit() {}

  searchCrypto(): void {
    const search = {
      crypto: this.cryptoInput,
      change: this.changeInput
    };
    this.emitter.emit(search);
  }
}
