import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../../@services/character.service';
import {Observable} from 'rxjs';
import {ICharacter} from './character.interface';

@Component({
  selector: 'bb-fm-characters',
  templateUrl: 'characters.container.html',
  styleUrls: ['characters-container.scss']
})
export class CharactersContainer implements OnInit {

  characters$: Observable<ICharacter[]> | undefined;

  constructor(
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.getAllCharacters();
  }
}
