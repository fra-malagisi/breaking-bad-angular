import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ICharacter, ICharacterFilter} from '../../@views/characters/character.interface';
import {catchError, map, tap} from 'rxjs/operators';
import {CharacterService} from './character.service';
import {objectToQueryParamsConverter, cleanObject} from '../../@utils/object.utils';

@Injectable({
  providedIn: 'root'
})
export class CharacterFacade {

  private _totalCharacters = new BehaviorSubject<number>(1);
  totalCharacters$ = this._totalCharacters.asObservable().pipe(
    tap(console.log),
    catchError(err => of(1))
  );

  constructor(private characterService: CharacterService) {}

  getPageCharacters(page: number, charactersPerPage: number, filters: Partial<ICharacterFilter>): Observable<ICharacter[]> {
    return this.characterService.getAllCharacters(objectToQueryParamsConverter({...cleanObject(filters)})).pipe(
      tap((characters: ICharacter[]) => this._totalCharacters.next(characters.length)),
      map((characters: ICharacter[]) => this.getCharactersSlice(characters, page, charactersPerPage))
    );
  }

  private getCharactersSlice(characters: ICharacter[], page: number, charactersPerPage: number): ICharacter[] {
    const startLimit = ((page ?? 1) - 1) * charactersPerPage;
    return characters.slice(startLimit, startLimit + charactersPerPage);
  }
}
