import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cms-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  
  articles$: Observable<any[] | null>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.articles$ = this.httpClient.get<any[]>('http://localhost:3000/articles');
  }

  reloadArticles(deletionSuccess: boolean){
    console.log('deletion successful: ', deletionSuccess);
    this.articles$= this.httpClient.get<any[]>('http://localhost:3000/articles');
  }

}
