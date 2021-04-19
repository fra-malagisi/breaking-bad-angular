import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';
import {ICharacter} from './character.interface';
import {CharacterFacade} from '../../@services/character/character.facade';

@Component({
  selector: 'bb-fm-characters',
  templateUrl: 'characters.container.html',
  styleUrls: ['characters-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersContainer implements OnInit {

  public characters$: Observable<ICharacter[]> | undefined;
  public charactersPerPage = 4;
  public currentPage !: number;
  public totalCharacters$ = this.characterFacade.totalCharacters$;

  constructor(
    private characterFacade: CharacterFacade,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characters$ = this.activatedRoute.queryParams.pipe(
      tap(({page}) => {
        this.currentPage = page ?? 1;
        this.currentPage = Number.parseInt(this.currentPage.toString(), 10);
      }),
      switchMap(({page}) => this.characterFacade.getPageCharacters(page, this.charactersPerPage)));
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
}
