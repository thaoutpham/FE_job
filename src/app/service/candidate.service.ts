import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Cv} from '../model/user/cv';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Candidate} from '../model/company/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<Candidate[]> {
    return this.httpClient.get<Candidate[]>(environment.API_URL + '/candidates');
  }

  save(cv: Cv): Observable<any> {
    return this.httpClient.post<any>(environment.API_URL + '/candidates', cv);
  }
  findByPostId(id: any): Observable<Candidate> {
    return this.httpClient.get<Candidate>(environment.API_URL + `/candidates/${id}`);
  }

}
