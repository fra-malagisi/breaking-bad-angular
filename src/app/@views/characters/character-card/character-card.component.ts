import {Component, Input} from '@angular/core';
import {ICharacter} from '../character.interface';

@Component({
  selector: 'bb-fm-character-card',
  templateUrl: 'character-card.component.html',
  styleUrls: ['character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() character: ICharacter | undefined;
}
