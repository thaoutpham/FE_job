import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  getSearchedPosts(params: any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // @ts-ignore
    return this.httpClient.get(`${environment.baseUrl}/posts/find?` + params.toString());
  }
  // tslint:disable-next-line:typedef
  // getAllPosts(request: any){
  //   const params = request;
  //   console.log('size:' + params);
  //   return this.httpClient.get(`${environment.baseUrl}/posts/findAll`, {params});
  // }
  // tslint:disable-next-line:typedef
  countPosts(){
    return this.httpClient.get(`${environment.baseUrl}/posts/count`);
  }
  getSuggestedPosts(cat_id:number){
    return this.httpClient.get(`http://localhost:8080/posts/company-category/${cat_id}`)
  }


}
