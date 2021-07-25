import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ]
})
export class CoreModule {
  constructor(router: Router) {
    router.events.pipe(
      filter(routerEvent => routerEvent instanceof NavigationEnd),
      map(routerEvent => routerEvent as NavigationEnd),
      ).subscribe({
        next: (navigation: NavigationEnd) =>
          console.log({
            category: 'BUSINESS',
            event: 'NAV',
            label: navigation.urlAfterRedirects,
          }),
      });
  }
}
