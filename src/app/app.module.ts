import { BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component'
import {HelloComponent} from './hello.component';
// import { environment } from '../environments/environment';
import { CustomModule } from './custom.module';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}