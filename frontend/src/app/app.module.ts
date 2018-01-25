import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([
      { path : '', component : MainComponent },
      { path : 'cart', component : CartComponent },
      { path : 'detail', component : DetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
