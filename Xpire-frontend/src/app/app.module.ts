import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveExpComponent } from './save-exp/save-exp.component';
import { SaveExpFormComponent } from './save-exp-form/save-exp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveExpComponent,
    SaveExpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
