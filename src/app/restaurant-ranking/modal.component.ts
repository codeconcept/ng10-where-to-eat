import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-component',
  template: `
    <h1 mat-dialog-title>Supprimer {{ data.name }}</h1>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Non merci</button>
      <button mat-button (click)="delete()">Oui, supprimer</button>
    </div>
  `,
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick() {
    this.dialogRef.close('nope');
  }

  delete() {
    this.dialogRef.close('delete soon');
    console.log('restau from dialog', this.data);
  }
}
