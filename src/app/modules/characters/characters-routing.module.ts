import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersHomeComponent } from './characters-home/characters-home.component';

const routes: Routes = [
    { path: '', component: CharactersHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
