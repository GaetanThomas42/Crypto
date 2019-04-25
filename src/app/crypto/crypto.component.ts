import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { Cryptom } from '../models/crypto.model';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
  requete: any;
  crypto: Cryptom;
  loading = false;
  constructor(public cs: CryptoService) { }

  // Get output from searchCrypto cpnt

  ngOnInit() {}


  getSearch(search: any): void {
    this.loading = true;
    this.cs.getCrypto(search.crypto, search.change).subscribe(res => {
      this.requete =  res;
      this.crypto = this.requete.ticker;
      this.loading = false;
    });
  }

}
