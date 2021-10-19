import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getSearchedPosts(params: any){
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.httpClient.get(`${environment.baseUrl}/posts/find?` + params.toString());
  }
  // countPosts(){
  //   return this.httpClient.get(`${environment.baseUrl}/posts/count`);
  // }
  // getSuggestedPosts(cat_id:number){
  //   return this.httpClient.get(`http://localhost:8080/posts/company-category/${cat_id}`)
  // }


}
