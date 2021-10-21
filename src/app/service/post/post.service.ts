import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getSearchedPosts(params: any){
    return this.httpClient.get(`${environment.baseUrl}/posts/search?` + params.toString());
  }

}
