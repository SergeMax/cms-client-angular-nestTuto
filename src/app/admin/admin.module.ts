import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleNewComponent } from './article-new/article-new.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    ArticleComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ArticleEditComponent
  ]
})
export class AdminModule { }
