import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import User from '../models/user';
import {BehaviorSubject, Observable} from 'rxjs';
import WebUtils from '../common/Web-Utils';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getAllUsers(): Observable<any>{
    return this.http.get(WebUtils.USER_LIST);
  }

  setHeaders() {
    this.headers = new HttpHeaders({
      authorization: 'Bearer ' + this.currentUserSubject.value.token,
      'Content-Type': 'application/json; charset=UTF-8'
    });
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public update(user: User): Observable<any> {
    debugger;
    return this.http.post(WebUtils.UPDATE_USER, user);
  }

  login(user: User): Observable<any> {
    const headers = new HttpHeaders(
      user ? {
        authorization: 'Basic ' + btoa(user.mail + ':' + user.parola)
      } : {}
    );

    return this.http.get<any> (WebUtils.USER_LOGIN, { headers}).pipe(
      map(response => {
        if (response){
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  logOut() {
    localStorage.clear();
  }

  public saveUser(user: User): Observable<any>{
    return this.http.post(WebUtils.USER_REGISTER, user);
  }
}
