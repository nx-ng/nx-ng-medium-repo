import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Lib0Module } from '@nx-ng-medium/app0/lib0';
import { Lib1Module } from '@nx-ng-medium/app0/lib1';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib0Module, Lib1Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
