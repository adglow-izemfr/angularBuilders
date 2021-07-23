import { Header } from '@ab/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { Category } from './models/category';

@Component({
  templateUrl: './home.page.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  categories$: Observable<Category[]> = this.service.getCategories$();
  header: Header = {
    heroClass: 'is-primary',
    title: 'The home of the Angular Builders',
    subtitle: 'A site to help you build great applications with Angular',
  };

  constructor(private service: HomeService) {}
}
