import {Component, Input, OnInit} from '@angular/core';
import {ICharacter} from '../character.interface';

@Component({
  selector: 'bb-fm-character-list',
  templateUrl: 'character-list.component.html',
  styleUrls: ['character-list.component.scss']
})
export class CharacterListComponent implements OnInit{
  @Input() characters: ICharacter[] = [];

  ngOnInit(): void {
    console.log(this.characters);
  }
}
