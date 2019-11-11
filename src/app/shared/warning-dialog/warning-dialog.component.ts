import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html'
})
export class WarningDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, description: string },
              public dialogRef: MatDialogRef<WarningDialogComponent>) {
  }

  ngOnInit(): void {
  }

  close(answer: boolean): void {
    this.dialogRef.close(answer);
  }
}
