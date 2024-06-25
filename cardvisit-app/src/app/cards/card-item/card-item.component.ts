import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent implements OnInit{
  @Input() cardItem!:Card;
  constructor(private dialog:MatDialog){}
  ngOnInit(): void {

  }
  openUpdateCardModal(card:Card):void{
    this.dialog.open(CardModalComponent,{
      width:"400px",
      data: card
    });
  }

}
