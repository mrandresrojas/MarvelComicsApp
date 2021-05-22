import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicListComponent} from 'src/app/component/pages/comics/comic-list/comic-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./component/pages/home/home.module').then(m => m.HomeModule)
  }, 
  {
    path: 'comic-list',
    loadChildren: () => import('./component/pages/comics/comic-list/comic-list.module').then(m => m.ComicListModule)
  }, 
  {
    path: 'comic-details/:id',
    loadChildren: () => import('./component/pages/comics/comic-details/comic-details.module').then(m => m.ComicDetailsModule)
  },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
