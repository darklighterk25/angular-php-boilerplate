import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Article} from '../../interfaces/article.interface';
import {InventoryService} from '../../services/inventory.service';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html'
})
export class ArticleDialogComponent implements OnInit {

  private formData: Article;

  public title: string;

  constructor(@Inject(MAT_DIALOG_DATA) public article: Article,
              public dialogRef: MatDialogRef<ArticleDialogComponent>,
              private inventoryService: InventoryService) {
  }

  ngOnInit(): void {
    this.title = this.article ? 'Editar' : 'Agregar';
  }

  addArticle(): void {
    this.inventoryService.addArticle(this.formData).subscribe(
      (newArticle: Article) => this.dialogRef.close(newArticle),
      error => console.log(error)
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  editArticle(): void {
    this.inventoryService.editArticle(this.article._id, this.formData).subscribe(
      (editedArticle: Article) => this.dialogRef.close(editedArticle),
      error => console.error(error)
    );
  }

  submit(formData: Article): void {
    this.formData = formData;
    this.title === 'Agregar' ? this.addArticle() : this.editArticle();
  }
}
