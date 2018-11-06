import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { DrawsModule } from './draws/draws.module';
import { AppRoutingModule } from './app-routing.module';
import { PrizesModule } from './prizes/prizes.module';

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    PrizesModule,
    DrawsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
