import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ICharacter} from '../../@views/characters/character.interface';
import {environment} from '../../../environments/environment';
import {catchError, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private basePath = `${environment.baseUrlApi}characters`;

  constructor(private http: HttpClient) {}

  getAllCharacters(filters: string = ''): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(`${this.basePath}?${filters}`).pipe(
      shareReplay(),
      catchError(err => of([]))
    );
  }
}
