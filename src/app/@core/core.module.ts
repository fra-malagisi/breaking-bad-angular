import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  declarations: [HeaderComponent, SidenavComponent],
  exports: [HeaderComponent, SidenavComponent]
})
export class CoreModule{}
