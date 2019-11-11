import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../../interfaces/article.interface';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: Article;
  @Output() edit = new EventEmitter<Article>();
  @Output() delete = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  editArticle(): void {
    this.edit.emit(this.article);
  }

  deleteArticle(): void {
    this.delete.emit(this.article._id);
  }

}
