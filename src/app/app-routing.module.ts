import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {
        // preload all modules; optionally we could
        // implement a custom preloading strategy for just some
        // of the modules (PRs welcome 😉)
        preloadingStrategy: PreloadAllModules
      })],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
