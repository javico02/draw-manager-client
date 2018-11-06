import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { DrawsModule } from '../draws/draws.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    DrawsModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule { }
