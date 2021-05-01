import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FotosComponent } from './fotos/fotos.component';
import { AreasComunsComponent } from './fotos/areas-comuns/areas-comuns.component';
import { CordelComponent } from './fotos/cordel/cordel.component';
import { RooftopArteComponent } from './fotos/rooftop-arte/rooftop-arte.component';
import { RooftopPoesiaComponent } from './fotos/rooftop-poesia/rooftop-poesia.component';
import { XiloComponent } from './fotos/xilo/xilo.component';
import { HomeComponent } from './home/home.component';
import { MeuCaisComponent } from './fotos/meu-cais/meu-cais.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

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
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [Title, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
