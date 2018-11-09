import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawsListComponent } from './draws-list/draws-list.component';
import { DrawListItemComponent } from './draw-list-item/draw-list-item.component';
import { DrawEditorComponent } from './draw-editor/draw-editor.component';
import { DrawsRoutingModule } from './draws-routing.module';
import { SharedModule } from '../shared';
import { DrawDetailsComponent } from './draw-details/draw-details.component';
import { DrawResolver } from './draw-resolver.service';
import { PrizesModule } from '../prizes/prizes.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrizesModule,
    DrawsRoutingModule
  ],
  declarations: [
    DrawsListComponent,
    DrawListItemComponent,
    DrawEditorComponent,
    DrawDetailsComponent
  ],
  exports: [
    DrawsListComponent
  ],
  providers: [
    DrawResolver
  ]
})
export class DrawsModule { }
