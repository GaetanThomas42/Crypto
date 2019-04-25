import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoComponent } from './crypto/crypto.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'crypto'},
  {path: 'crypto', component: CryptoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
