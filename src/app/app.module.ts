import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FotosComponent } from './fotos/fotos.component';
import { AreasComunsComponent } from './fotos/areas-comuns/areas-comuns.component';
import { CordelComponent } from './fotos/cordel/cordel.component';
import { RooftopArteComponent } from './fotos/rooftop-arte/rooftop-arte.component';
import { RooftopPoesiaComponent } from './fotos/rooftop-poesia/rooftop-poesia.component';
import { XiloComponent } from './fotos/xilo/xilo.component';
import { HomeComponent } from './home/home.component';
import { MeuCaisComponent } from './fotos/meu-cais/meu-cais.component';

import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    AreasComunsComponent,
    CordelComponent,
    RooftopArteComponent,
    RooftopPoesiaComponent,
    XiloComponent,
    HomeComponent,
    MeuCaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
