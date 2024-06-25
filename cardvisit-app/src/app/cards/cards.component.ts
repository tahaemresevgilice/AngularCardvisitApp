import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  cards!:Card[];

  constructor(public dialog:MatDialog,private cardService:CardService) {}
  ngOnInit(): void {
    this.getCards();
  }

  openAddCardModal(){
    this.dialog.open(CardModalComponent,{
      width:'400px'
    });
  }
  getCards():void{
    this.cardService.getCards().subscribe((res:Card[])=>{
      console.log(res);
      this.cards = res;
    })
  }

}
