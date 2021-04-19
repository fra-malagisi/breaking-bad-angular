import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ICharacter} from '../@views/characters/character.interface';
import {environment} from '../../environments/environment';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private basePath = `${environment.baseUrlApi}characters`;
  totalCharacters = new BehaviorSubject<number>(1);
  totalCharacters$ = this.totalCharacters.asObservable().pipe(
    catchError(err => of(1))
  );

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(`${this.basePath}`).pipe(
      shareReplay(),
      tap((character: ICharacter[]) => this.totalCharacters.next(character.length)),
      catchError(err => of([]))
    );
  }

  getPageCaharacters(page: number, charactersPerPage: number): Observable<ICharacter[]> {
    return this.getAllCharacters().pipe(
      map((characters: ICharacter[]) => this.getCharactersSlice(characters, page, charactersPerPage))
    );
  }

  getCharactersSlice(characters: ICharacter[], page: number, charactersPerPage: number): ICharacter[] {
    const startLimit = ((page ?? 1) - 1) * charactersPerPage;
    return characters.slice(startLimit, startLimit + charactersPerPage);
  }
}
