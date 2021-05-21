import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicListComponent } from './comic-list.component';

const routes: Routes = [{ path: '', component: ComicListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicListRoutingModule { }
