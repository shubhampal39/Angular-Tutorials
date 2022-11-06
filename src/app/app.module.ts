import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { SubViewchildComponent } from './viewchild/sub-viewchild/sub-viewchild.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ViewchildComponent,
    SubViewchildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
