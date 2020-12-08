import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../interface/register';
import { Observable  } from 'rxjs';
import { Login } from '../interface/login'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }
  callBack: Observable<Login> | undefined;

  registerVendor(registerBody:any): Observable<Register>
  {
    const serverUrl = "http://paperplane.store:3000/vendor/register";
    console.log(registerBody);
    return this.httpClient.post<Register>(serverUrl, registerBody);
  }

  loginVendor(loginBody : any): Observable<Login>
  {
    const serverUrl = "http://paperplane.store:3000/vendor/login";
    console.log("login Service's obj: " , loginBody);
    this.callBack = this.httpClient.post<Login>(serverUrl, loginBody);
    return this.callBack;
  }
  checkIsLogin()
  {
    if(localStorage.getItem("login") == "Login Success!" && localStorage.getItem("token") !="")
    {
      return true;
    }
    return false;
  }
}
