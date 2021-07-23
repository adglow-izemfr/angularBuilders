import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const notFoundRoute: Route =
{
  path: '**',
  redirectTo: 'not-found',
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@ab/home').then((module) => module.HomeModule),
  },
  {
    path: 'resource',
    loadChildren: () =>
      import('@ab/resource').then((module) => module.ResourceModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('@ab/category').then((module) => module.CategoryModule),
  },
  {
    path: 'resource-new',
    loadChildren: () =>
      import('@ab/resource-new').then((module) => module.ResourceNewModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('@ab/search').then((module) => module.SearchModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('@ab/auth').then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot([...routes, notFoundRoute])],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
