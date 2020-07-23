import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import WebUtils from '../../../shared/common/Web-Utils';
import User from '../../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  currentUser: User;
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization: 'Bearer ' + this.currentUser.token,
      'Content-Type': 'application/json; charset=UTF-8'
    });
  }

  public getAllProduct(): Observable<any>{
    return this.httpClient.get(WebUtils.ALL_PRODUCT, {headers: this.headers});
  }
  public findTop10ByOrderByIdAsc(): Observable<any>{
    return this.httpClient.get(WebUtils.LAST_TEN_PRODUCT, {headers: this.headers});
  }

  public getProductWithById(id: number): Observable<any> {
    return this.httpClient.get(WebUtils.ONE_PRODUCT + id, {headers: this.headers});
  }
}
