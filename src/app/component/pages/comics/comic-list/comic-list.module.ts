import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicListRoutingModule } from './comic-list-routing.module';
import { ComicListComponent } from './comic-list.component';


@NgModule({
  declarations: [
    ComicListComponent
  ],
  imports: [
    CommonModule,
    ComicListRoutingModule
  ]
})
export class ComicListModule { }
