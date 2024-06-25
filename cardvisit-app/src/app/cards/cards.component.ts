import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cardItem = {
    title:"Frontend Devoloper",
    name:"Mehmet Sert",
    phone:"05514872345",
    email:"info@gmail.com",
    address:"Osmangazi, Bursa"
  }
  constructor(public dialog:MatDialog) {}

  openAddCardModal(){
    this.dialog.open(CardModalComponent,{
      width:'400px'
    });
  }

}
