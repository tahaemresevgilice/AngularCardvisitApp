import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnInit {
  cards!: Card[];
  constructor(@Inject('api') private api:string, private http:HttpClient) { }

  ngOnInit(){

  }

  getCards():void{
    this.http.get<Card[]>(this.api +"cards").subscribe((res: Card[])=>{
      this.cards = res;
    });
  }

  addCard(card:Card){
    return this.http.post(this.api + "cards", card);
  }

  updateCard(card:Card,cardId:number) :Observable<any>{
    return this.http.put(this.api + "cards/" + cardId , card);
  }
  deleteCard(cardId:number):Observable<any>{
    return this.http.delete(this.api + "cards/" + cardId);
  }
}
