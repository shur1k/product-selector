import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductSeletionModule } from './modules/product-seletion/product-seletion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ProductSeletionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
