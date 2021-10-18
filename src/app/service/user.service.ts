import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post/post";
import { User } from '../model/user';
const API_URL = 'http://localhost:8080/users'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  findById(id: string): Observable<User> {
    return this.http.get<User>(API_URL + `/${id}`);
  }
  update(id: string, user: User): Observable<User> {
    return this.http.put<Post>(API_URL + `/${id}`, user);
  }
  create( user: User): Observable<User> {
    return this.http.post<Post>(API_URL, user);
  }
  delete(id: string) {
    return this.http.delete(API_URL + `/${id}`);
  }
}
