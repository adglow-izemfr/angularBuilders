import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryPage } from './category.page';
import { ResourceListComponent } from './resource-list/resource-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: ':id', pathMatch: 'full', component: CategoryPage},
    ]),
    UiModule,
  ],
  declarations: [
    CategoryPage,
    ResourceListComponent
  ],
})
export class CategoryModule {}
