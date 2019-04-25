import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cryptom } from './models/crypto.model';
@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  API_URL = 'https://api.cryptonator.com/api/full/';
  constructor(public http: HttpClient) { }

  getCrypto(cryptoName: string, cryptoChange: string): Observable<Cryptom> {
    if (cryptoChange) {
      return this.http.get<Cryptom>(this.API_URL + cryptoName + '-' + cryptoChange);

    } else {
      return this.http.get<Cryptom>(this.API_URL + cryptoName + '-eur');
    }
  }
}
