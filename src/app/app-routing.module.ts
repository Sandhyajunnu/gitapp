import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndiaComponent } from './india/india.component';
import { LogoComponent } from './logo/logo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShaktipeetasComponent } from './shaktipeetas/shaktipeetas.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"logo",component:LogoComponent},
  {path:"india",component:IndiaComponent},
  {path:"world",component:WorldComponent},
  {path:"shaktipeetas",component:ShaktipeetasComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
