import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { throwError } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from './../../admin/article.service';

@Component({
  selector: 'cms-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.css']
})
export class ArticleSummaryComponent implements OnInit {





  @Input() article: Article;
  isWaitingForServerResponse = false;
  error = null;
  isInEditMode = false;
  @Output() deleteSuccess = new EventEmitter<boolean>();


  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }




  delete(article: Article) {
    this.isWaitingForServerResponse = true;
    this.articleService
      .deleteArticle(article)
      .subscribe({
        next: data => {
          this.isWaitingForServerResponse = false;
          this.handleSuccess(data);
        },
        error: (e) => this.handleError(e)
      })
  }

  handleError(err: any) {
    console.error('error grrrr', err);
    this.error = err;
    return throwError(() => this.error);
  }

  handleSuccess(data: any) {
    console.log('sucess', data);
    this.deleteSuccess.emit(true);

  }

  toggleReadMode() {
    this.isInEditMode = !this.isInEditMode;
  }

  reloadArticle(article: Article) {
    console.log(article);
    this.article = article;
  }


}
