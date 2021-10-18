import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../model/company/company';
import {environment} from '../../environments/environment.prod';
import {Post} from '../model/post/post';
import {Cv} from '../model/user/cv';


@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>(environment.API_URL + '/cvs');
  }

  save(cv: Cv): Observable<Cv> {
    return this.httpClient.post<Cv>(environment.API_URL + '/cvs', cv);
  }

  findByUserId(id: any): Observable<Cv> {
    return this.httpClient.get<Cv>(environment.API_URL + `/cvs/${id}`);
  }
}
