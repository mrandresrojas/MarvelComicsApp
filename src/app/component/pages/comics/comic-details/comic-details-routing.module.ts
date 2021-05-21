import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicDetailsComponent } from './comic-details.component';

const routes: Routes = [{ path: '', component: ComicDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicDetailsRoutingModule { }
