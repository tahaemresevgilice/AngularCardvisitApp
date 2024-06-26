import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { CardsRoutingModule } from './cards-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { CardsComponent } from './cards.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardModalComponent } from './card-modal/card-modal.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule

  ]
})
export class CardsModule { }
