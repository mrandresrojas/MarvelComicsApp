import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicListRoutingModule } from './comic-list-routing.module';
import { ComicListComponent } from './comic-list.component';
import { ComicService } from '@app/shared/services/comic.service';


@NgModule({
  declarations: [
    ComicListComponent
  ],
  imports: [
    CommonModule,
    ComicListRoutingModule
  ]
  /*providers:[ComicService]
  
*/}
)
export class ComicListModule { }
