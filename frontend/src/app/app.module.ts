import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {ContentModule} from './content/content.module';
import {UsersModule} from './users/users.module';
import {HttpClientModule} from '@angular/common/http';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ComponentsModule,
    ContentModule,
    UsersModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
