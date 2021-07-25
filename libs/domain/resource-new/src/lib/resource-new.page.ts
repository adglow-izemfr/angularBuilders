import { Header } from '@ab/ui';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './models/category';
import { Resource } from './models/resource';
import { ResourceNewService } from './resource-new.service';

@Component({
  templateUrl: './resource-new.page.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceNewPage implements OnInit {
  categories$!: Observable<Category[]>;
  header: Header = {
    heroClass: 'is-warning',
    title: 'Add a new resource',
    subtitle: 'Help us complete the Angular Builders Catalog.',
  };

  constructor(private service: ResourceNewService) { }

  ngOnInit(): void {
    this.categories$ = this.service.getCategories$();
  }
  OnSend(newResource: Resource) {
    this.service.postNewResource$(newResource).subscribe();
  }

}
