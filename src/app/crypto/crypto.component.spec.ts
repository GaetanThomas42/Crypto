import {
  of
} from 'rxjs';
import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  CryptoComponent
} from './crypto.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MarketsComponent
} from '../markets/markets.component';
import {
  MarketComponent
} from '../market/market.component';

import {
  CryptoService
} from '../crypto.service';


describe('CryptoComponent', () => {
  let component: CryptoComponent;
  let fixture: ComponentFixture < CryptoComponent > ;
  let element: any; // Déclaration de element
  //   Création d'un espion objet qui imite / remplace la méthode getCrypto du CryptoService
  const spyObjServ = jasmine.createSpyObj('CryptoService', {
    getCrypto: of ({
      t: null
    }) // le ': of() simule le return de la methode et envoie ce qu'il y a entre ()
  }); //  SI vous appeler donc component.CryptoService.getCrypto vous obtiendrez {t: null}

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule, ReactiveFormsModule], // Import modules, erreur de type HttpClient, ngModel...
        declarations: [CryptoComponent, MarketComponent, MarketsComponent],
         // Import composants ,erreur de type app-composants unknown property of ...

        providers: [{ // On indique au composant d'utiliser le SpyObj au lieu du CryptoService
          provide: CryptoService,
          useValue: spyObjServ
        }]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement; // Instantiation de element
    component.crypto = {
      base: 'test',
      target: 'test1',
      price: 'test2',
      volume: 'test3',
      change: 'test',
      markets: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select correctly', () => { // Compliqué a comprendre !
    component.names = ['test1', 'test2', 'test3']; // Je créé un tableau ,chaque option prend les valeurs une a une (ngFor)
    fixture.detectChanges(); // Lorsque on modifie le composants , on doit detecter les changements
    fixture.whenStable().then(() => { // On attends que le composants ne modifie plus rien en son sein ,il est stable
      expect(element.querySelector('option').textContent).toEqual('test1'); // Le test passe si la valeur de la 1ere option 
      // est egale a la premiere valeur du tableau créé plus haut
    });

  });

  it('should call method searchCrypto', () => {
    spyOn(component, 'searchCrypto'); // On créé un espion sur le composant qui surveille la méthode searchCrypto
    element.querySelector('button').click(); // On click sur le bouton relié a cette methode
    expect(component.searchCrypto).toHaveBeenCalled(); // On verifie que la methode est bien été appelé
  });

  it('should display title', () => {
    expect(element.querySelector('h2').textContent).toEqual('test');
    // On verifie que la valeur du h2 soit égale a la valeur crypto.base
  });

  it('should display volume', () => {
    expect(element.querySelector('#volume').textContent).toContain('test3');
    // On verifie que la valeur l'element avec l'id contienne a la valeur crypto.volume

  });

  it('should display price', () => {
    expect(element.querySelector('#price').textContent).toContain('test2');
    // On verifie que la valeur de l'element avec l'id contienne a la valeur crypto.price
  });



  it('should display change', () => {
    expect(element.querySelector('#change').textContent).toContain('test');
    // On verifie que la valeur l'element avec l'id contienne a la valeur crypto.change
  });

  // it('should display Search Crypto if !Crypto', () => {
  //   component.crypto = null;
  //   fixture.detectChanges(); // Lorsque on modifie le composants , on doit detecter les changements
  //   if (!component.crypto) {
  //     expect(element.querySelector('#searchCrypto').textContent).toEqual('Search a Crypto');
  //   }

  // });
});
