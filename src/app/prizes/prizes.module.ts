import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrizeResolver } from './prize-resolver.service';
import { PrizesListComponent } from './prizes-list/prizes-list.component';
import { SharedModule } from '../shared';
import { PrizeListItemComponent } from './prize-list-item/prize-list-item.component';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LottieAnimationViewModule.forRoot(),
  ],
  declarations: [
    PrizesListComponent,
    PrizeListItemComponent,
  ],
  exports: [
    PrizesListComponent
  ],
  providers: [
    PrizeResolver
  ]
})
export class PrizesModule { }
