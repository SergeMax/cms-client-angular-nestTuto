import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from './../article.service';

@Component({
  selector: 'cms-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

  response$: Observable<Article | null>;
  error = null;

  constructor(private fb: FormBuilder, private articleService: ArticleService) { }


  articleForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', [Validators.required, Validators.minLength(4)]],
    creationDate: new Date().toISOString()
  })

  ngOnInit(): void {
  }

  get title() {
    return this.articleForm.get('title');
  }

  get content() {
    return this.articleForm.get('content');
  }

  submit() {
    console.log('article / submit', this.articleForm.value);
    this.response$ = this.articleService
      .createArticle(this.articleForm.value)
      .pipe(
        catchError(error => {
          this.error = error;
          return EMPTY;
        })
      )

  }

}
