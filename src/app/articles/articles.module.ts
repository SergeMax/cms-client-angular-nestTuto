import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminModule } from './../admin/admin.module';

import { HttpClientModule } from '@angular/common/http';
import { ArticleSummaryComponent } from './article-summary/article-summary.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleSummaryComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    HttpClientModule,
    AdminModule
  ]
})
export class ArticlesModule { }
