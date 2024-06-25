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

  constructor(public dialog:MatDialog,public cardService:CardService) {}
  ngOnInit(): void {
    this.cardService.getCards();
  }

  openAddCardModal(){
    this.dialog.open(CardModalComponent,{
      width:'400px'
    });
  }
}
