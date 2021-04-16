import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CharacterService} from '../../@services/character.service';
import {combineLatest, Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map, shareReplay, tap} from 'rxjs/operators';
import {ICharacter} from './character.interface';

@Component({
  selector: 'bb-fm-characters',
  templateUrl: 'characters.container.html',
  styleUrls: ['characters-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersContainer implements OnInit {

  public characters$: Observable<ICharacter[]> | undefined;
  public totalCharacters!: number;
  public charactersPerPage = 4;
  public currentPage !: number;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.characters$ = combineLatest([
      this.characterService.getAllCharacters().pipe(shareReplay()),
      this.activatedRoute.queryParams
    ]).pipe(
      tap(([characters, {page}]) => {
        this.totalCharacters = characters.length;
        this.currentPage = page ?? 1;
        this.currentPage = Number.parseInt(this.currentPage.toString(), 10);
      }),
       map(([characters, {page}]) => this.getCharactersForPage(characters, page))
    );
  }

  handlePageChange(page: number): void {
    const queryParams: Params = { page };
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge'
      });
  }

  getCharactersForPage(characters: ICharacter[], page: number): ICharacter[] {
    const startLimit = ((page ?? 1) - 1) * this.charactersPerPage;
    return characters.slice(startLimit, startLimit + this.charactersPerPage);
  }
}
