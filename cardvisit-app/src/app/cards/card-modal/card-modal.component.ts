import { CardService } from './../../services/card.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from '../../models/card';
@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.css'
})
export class CardModalComponent implements OnInit {

  cardform!:FormGroup;

  constructor(private fb:FormBuilder,private cardService:CardService,private dialogRef:MatDialogRef<CardModalComponent>,private snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA)public data:Card){}
  ngOnInit(){
    console.log(this.data);
    this.cardform = this.fb.group({
      name: [this.data?.name || '', [Validators.maxLength(50)]],
      title: [this.data?.title || '', [Validators.required, Validators.maxLength(255)]],
      phone: [this.data?.phone || '', [Validators.required, Validators.maxLength(11)]],
      email: [this.data?.email || '', [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address || '', [Validators.maxLength(255)]]
    });
  }
  addCard():void{
    console.log(this.cardform.value);
    this.cardService.addCard(this.cardform.value).subscribe((res)=> {
      console.log(res);
      this.snackBar.open('Kartvizit başarıya eklendi.','',{
        duration:4000,
      });
      this.dialogRef.close(true);
    });
  }
  updateCard(): void {
    if (this.data?.id !== undefined) {
      this.cardService.updateCard(this.cardform.value, this.data.id).subscribe((res: any) => {
        console.log(res);
        this.snackBar.open('Kartvizit başarıyla güncellendi.', '', {
          duration: 4000,
        });
        this.dialogRef.close(true);
      }, error => {
        this.snackBar.open('Kartvizit güncellenirken bir hata oluştu.', '', {
          duration: 4000,
        });
      });
    } else {
      this.snackBar.open('Geçersiz kart ID.', '', {
        duration: 4000,
      });
    }
  }
}
