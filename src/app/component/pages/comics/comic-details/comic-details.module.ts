import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicDetailsRoutingModule } from './comic-details-routing.module';
import { ComicDetailsComponent } from './comic-details.component';


@NgModule({
  declarations: [
    ComicDetailsComponent
  ],
  imports: [
    CommonModule,
    ComicDetailsRoutingModule
  ]
})
export class ComicDetailsModule { }
