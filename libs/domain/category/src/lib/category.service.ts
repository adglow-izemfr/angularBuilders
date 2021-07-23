import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './models/category';
import { map } from 'rxjs/operators';
import { Resource } from './models/resource';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly categoriesUrl = `https://api-angularbuilders.herokuapp.com/v1/categories`;
  constructor(private http: HttpClient) {}

  getCategoryById$(categoryId: string) {
    return this.http
      .get<{ data: Category }>(`${this.categoriesUrl}/${categoryId}`)
      .pipe(map((result) => result.data));
  }

  getResourcesByCategoryId$(categoryId: string) {
    return this.http
      .get<{ data: Resource[] }>(`${this.categoriesUrl}/${categoryId}/resources`)
      .pipe(map((result) => result.data));
  }
}
