import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'cms-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  @Input() article: Article;
  articleForm: FormGroup;
  

  error = null;
  @Output() articleUpdate: EventEmitter<Article> = new EventEmitter();
  response$: Observable<Article>;

  constructor(private fb: FormBuilder, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleForm = this.fb.group({
      title: [this.article.title, Validators.required],
      content: [this.article.content, [Validators.required, Validators.minLength(4)]]
    });
  }


  get title() {
    return this.articleForm.get('title');
  }

  get content() {
    return this.articleForm.get('content');
  }

  async submit() {
    this.error = null;
    this.response$ = await this.articleService
      .updateArticle(this.article._id, this.articleForm.value)
      .pipe(
        tap(updatedArticle => this.articleUpdate.emit(updatedArticle)),
        catchError(error => {
          this.error = error;
          return EMPTY;
        })
      );
  }
}
