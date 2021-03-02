import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CharactersRoutingModule } from '../characters/characters-routing.module';

import { CharactersHomeComponent } from './characters-home/characters-home.component';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [CharactersHomeComponent, CharacterCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
