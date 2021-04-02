import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrbitCountsComponent } from './orbit-counts/orbit-counts.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    OrbitCountsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
