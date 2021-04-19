import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CharacterService} from '../../@services/character.service';
import {Observable, of} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';
import {ICharacter} from './character.interface';

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

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characters$ = this.activatedRoute.queryParams.pipe(
      tap(({page}) => {
        this.currentPage = page ?? 1;
        this.currentPage = Number.parseInt(this.currentPage.toString(), 10);
      }),
      switchMap(({page}) => this.characterService.getPageCaharacters(page, this.charactersPerPage)));
  }

  getTotalCharacters(): Observable<number> {
    return this.characterService.totalCharacters$;
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
