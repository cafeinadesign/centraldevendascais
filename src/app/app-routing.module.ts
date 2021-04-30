import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FotosComponent } from './fotos/fotos.component';
import { AreasComunsComponent } from './fotos/areas-comuns/areas-comuns.component';
import { CordelComponent } from './fotos/cordel/cordel.component';
import { MeuCaisComponent } from './fotos/meu-cais/meu-cais.component';
import { RooftopArteComponent } from './fotos/rooftop-arte/rooftop-arte.component';
import { RooftopPoesiaComponent } from './fotos/rooftop-poesia/rooftop-poesia.component';
import { XiloComponent } from './fotos/xilo/xilo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'fotos/areas-comuns', component: AreasComunsComponent },
  { path: 'fotos/cordel', component: CordelComponent },
  { path: 'fotos/meu-cais', component: MeuCaisComponent },
  { path: 'fotos/rooftop-arte', component: RooftopArteComponent },
  { path: 'fotos/rooftop-poesia', component:  RooftopPoesiaComponent },
  { path: 'fotos/xilo', component:  XiloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
