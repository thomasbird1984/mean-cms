import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

const routes: Routes = [];

@NgModule({
  exports: [
      RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
