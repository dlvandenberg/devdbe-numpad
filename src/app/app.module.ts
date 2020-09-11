import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumpadComponent } from './numpad/numpad.component';
import { PadComponent } from './numpad/pad/pad.component';
import { DisplayComponent } from './numpad/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    NumpadComponent,
    PadComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
