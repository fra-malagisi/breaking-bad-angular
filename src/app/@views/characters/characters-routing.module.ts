import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CharactersContainer} from './characters.container';

const routes: Routes = [
  {
    path: '',
    component: CharactersContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
