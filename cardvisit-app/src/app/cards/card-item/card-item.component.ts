import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  @Input() cardItem!:Card;
  constructor(){}

}
