import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {Observable, Subscription} from 'rxjs';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';

import {Article} from '../../interfaces/article.interface';
import {ArticleDialogComponent} from '../../dialogs/article-dialog/article-dialog.component';
import {WarningDialogComponent} from '../../../shared/warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html'
})
export class StockComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private subscription: Subscription;

  public breakpoint: number;
  public dataSource: MatTableDataSource<Article>;
  public observable: Observable<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private dialog: MatDialog,
              private inventoryService: InventoryService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 1220) ? 3 : 4;
    this.subscription = this.inventoryService.getArticles().subscribe(
      (data: Article[]) => {
        this.dataSource = new MatTableDataSource<Article>(data);
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.observable = this.dataSource.connect();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onResize(event) {
    const innerWidth = event.target.innerWidth;
    this.breakpoint = this.breakpoint = (innerWidth <= 900) ? 2 : (innerWidth >= 900 && innerWidth <= 1220) ? 3 : 4;
  }

  addArticle(): void {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {disableClose: true});
    dialogRef.afterClosed().subscribe(
      (newArticle: Article) => {
        if (newArticle) {
          this.addToArray(newArticle);
        }
      }
    );
  }

  addToArray(article: Article): void {
    const data = this.dataSource.data;
    data.push(article);
    this.dataSource.data = data;
    this.snackBar.open('Se agregó el artículo correctamente.', 'OK', {verticalPosition: 'top'});
  }

  editArticle(article: Article): void {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {data: article, disableClose: true});
    dialogRef.afterClosed().subscribe(
      (editedArticle: Article) => {
        if (editedArticle) {
          this.updateFromArray(editedArticle);
        }
      },
      error => console.error(error)
    );
  }

  deleteArticle(_id: any): void {
    const dialogRef = this.dialog.open(WarningDialogComponent,
      {data: {title: '¿Seguro que desea eliminar el artículó?', description: 'Esta acción no se puede deshacer.'}});
    dialogRef.afterClosed().subscribe(
      (answer: boolean) => {
        if (answer) {
          this.inventoryService.deleteArticle(_id).subscribe(
            () => this.removeFromArray(_id),
            error => console.error(error)
          );
        }
      }
    );
  }

  removeFromArray(_id: any): void {
    this.dataSource.data = this.dataSource.data.filter(article => article._id !== _id);
    this.snackBar.open('Se eliminó el artículo correctamente.', 'OK', {verticalPosition: 'top'});
  }

  updateFromArray(article: Article): void {
    this.dataSource.data.forEach((element: Article) => {
      if (element._id.$oid === article._id.$oid) {
        element.name = article.name;
        element.description = article.description;
        element.cost = article.cost;
        element.stock = article.stock;
        this.snackBar.open('Se editó el artículo correctamente.', 'OK', {verticalPosition: 'top'});
      }
    });
  }
}
