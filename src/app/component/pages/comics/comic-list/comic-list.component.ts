import { Component, OnInit } from '@angular/core';
import {ComicService} from 'src/app/shared/services/comic.service'
import { Observable} from 'rxjs';
@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {

  constructor(private ComicSvc: ComicService) { }
  allComics: Observable<any> | undefined;
  ngOnInit(): void {
    this.getComics();
    this.allComics?.subscribe(res=>{
      console.log(res)
    })
  }
getComics(){
this.allComics = this.ComicSvc.getAllComics();
}
}
