import { TestBed } from '@angular/core/testing';
import { CryptoService } from './crypto.service';
import { HttpClientModule } from '@angular/common/http';

describe('CryptoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CryptoService = TestBed.get(CryptoService);
    expect(service).toBeTruthy();
  });
});
