import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import {InventoryComponent} from './inventory.component';
// Components
import {ArticleCardComponent} from './components/article-card/article-card.component';
import {ArticleFormComponent} from './components/article-form/article-form.component';
// Dialogs
import {ArticleDialogComponent} from './dialogs/article-dialog/article-dialog.component';
// Pages
import {StockComponent} from './pages/stock/stock.component';
// Providers
import {InventoryService} from './services/inventory.service';
// Routes
import {InventoryRoutes} from './inventory.routes';

@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleDialogComponent,
    ArticleFormComponent,
    InventoryComponent,
    StockComponent
  ],
  entryComponents: [
    ArticleDialogComponent,
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(InventoryRoutes),
    SharedModule
  ],
  exports: [
    ArticleCardComponent,
    ArticleDialogComponent,
    ArticleFormComponent,
    InventoryComponent,
    StockComponent
  ],
  providers: [InventoryService]
})
export class InventoryModule {
}
