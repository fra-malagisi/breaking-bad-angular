import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICharacter} from '../character.interface';

@Component({
  selector: 'bb-fm-character-list',
  templateUrl: 'character-list.component.html',
  styleUrls: ['character-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListComponent {
  @Input() characters: ICharacter[] = [];
}
