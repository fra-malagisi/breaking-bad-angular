import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharactersContainer} from './characters.container';
import {CharactersRoutingModule} from './characters-routing.module';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterCardComponent} from './character-card/character-card.component';
import {CharacterFiltersComponent} from './character-filter/character-filters.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../@shared/shared.module';

@NgModule({
  imports: [CommonModule, CharactersRoutingModule, ReactiveFormsModule, SharedModule],
  declarations: [CharactersContainer, CharacterListComponent, CharacterCardComponent, CharacterFiltersComponent]
})
export class CharactersModule {}
