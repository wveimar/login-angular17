import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private LoggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private http = inject(HttpClient);

  constructor() { }

  login(user: { username: string,password: string}):Observable<any> {
    return this.http
    .post('http://localhost:4000/apiAgenda/auth/login', user)
    .pipe(
      tap((response:any) => this.doLoginUser(user.username,response.accessToken)
     
    )
    
    );
  }

  private doLoginUser (username: string, token: any){
    this.LoggedUser=username;
    debugger
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt:any){
    alert(jwt);
    localStorage.setItem(this.JWT_TOKEN,jwt)
  }
logout(){
  localStorage.removeItem(this.JWT_TOKEN);
  this.isAuthenticatedSubject.next(false)
}

}

