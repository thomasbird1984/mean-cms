import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { UsersComponent } from './users.component';
import { SingleComponent } from './single/single.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: ':id',
                component: SingleComponent
            }
        ]
    }
];

@NgModule({
  exports: [
      RouterModule
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [UsersComponent, SingleComponent, AddComponent, ListComponent]
})
export class UsersModule { }
