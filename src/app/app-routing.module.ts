import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ 
path: 'home', 
loadChildren: () => import('./component/pages/home/home.module').then(m => m.HomeModule) }, {
path: 'Comic-list', 
loadChildren: () => import('./component/pages/comics/comic-list/comic-list.module').then(m => m.ComicListModule) }, { 
path: 'Comic-details', 
loadChildren: () => import('./component/pages/comics/comic-details/comic-details.module').then(m => m.ComicDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
