import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  getAllCategories(){
    return this.httpClient.get(`${environment.baseUrl}/categories`);
  }
}
