import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImportantChildComponent } from './important-child/important-child.component';
import { UnimportantChildComponent } from './unimportant-child/unimportant-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ImportantChildComponent,
    UnimportantChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
