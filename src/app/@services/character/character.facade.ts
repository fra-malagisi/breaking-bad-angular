import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ICharacter} from '../../@views/characters/character.interface';
import {catchError, map, tap} from 'rxjs/operators';
import {CharacterService} from './character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterFacade {

  totalCharacters = new BehaviorSubject<number>(1);
  totalCharacters$ = this.totalCharacters.asObservable().pipe(
    catchError(err => of(1))
  );

  constructor(private characterService: CharacterService) {}

  getPageCharacters(page: number, charactersPerPage: number): Observable<ICharacter[]> {
    return this.characterService.getAllCharacters().pipe(
      tap((character: ICharacter[]) => this.totalCharacters.next(character.length)),
      map((characters: ICharacter[]) => this.getCharactersSlice(characters, page, charactersPerPage))
    );
  }

  getCharactersSlice(characters: ICharacter[], page: number, charactersPerPage: number): ICharacter[] {
    const startLimit = ((page ?? 1) - 1) * charactersPerPage;
    return characters.slice(startLimit, startLimit + charactersPerPage);
  }
}
