import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { IndiaComponent } from './india/india.component';
import { WorldComponent } from './world/world.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShaktipeetasComponent } from './shaktipeetas/shaktipeetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    IndiaComponent,
    WorldComponent,
    PagenotfoundComponent,
    ShaktipeetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
