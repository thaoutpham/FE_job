import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Exp } from '../model/exp';
const API_URL = 'http://localhost:8080/exp'
@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor(private http:HttpClient) { }
  getAllUser(id: string): Observable<Exp[]> {
    return this.http.get<Exp[]>(API_URL + '/user'+`/${id}`);
  }
  getById(id: string): Observable<Exp> {
    return this.http.get<Exp>(API_URL +`/${id}`);
  }

  save(exp: Exp): Observable<Exp> {
    return this.http.post<Exp>(API_URL,exp);
  }
  delete(id: string) {
    return this.http.delete(API_URL + `/${id}`);
  }
  update(id: string, exp: Exp): Observable<Exp> {
    return this.http.put<Exp>(API_URL + `/${id}`, exp);
  }
}
