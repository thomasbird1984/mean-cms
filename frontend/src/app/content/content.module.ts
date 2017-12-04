import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import { ContentComponent } from './content.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
    {
        path: 'content',
        component: ContentComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'add',
                component: AddComponent
            }
        ]
    }
];

@NgModule({
  exports: [
      RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [ContentComponent, ListComponent, AddComponent]
})
export class ContentModule { }
