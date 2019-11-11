import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';

import {WarningDialogComponent} from './warning-dialog/warning-dialog.component';

@NgModule({
  declarations: [
    WarningDialogComponent
  ],
  entryComponents: [
    WarningDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    WarningDialogComponent
  ]
})
export class SharedModule {
}
