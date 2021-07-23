import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotfilesComponent } from './dotfiles/dotfiles.component'
import { MinlauComponent } from './minlau/minlau.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
	{path: '', component: HomeComponent, pathMatch: 'full' },
	{path: 'dotfiles', component: DotfilesComponent},
	{path: 'minlau', component: MinlauComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
