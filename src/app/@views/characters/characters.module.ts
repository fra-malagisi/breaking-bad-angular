import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharactersContainer} from './characters.container';
import {CharactersRoutingModule} from './characters-routing.module';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterCardComponent} from './character-card/character-card.component';
import {CharacterFiltersComponent} from './character-filter/character-filters.component';

@NgModule({
  imports: [CommonModule, CharactersRoutingModule],
  declarations: [CharactersContainer, CharacterListComponent, CharacterCardComponent, CharacterFiltersComponent]
})
export class CharactersModule {}
