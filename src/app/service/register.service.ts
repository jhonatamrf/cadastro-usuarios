import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterResponse } from '../types/register-response.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(name: string, email:string, password: string, confirmPassword: string){
    return this.httpClient.post<RegisterResponse>("/register", {name, email, password, confirmPassword}).pipe(
     tap((value) => {
      sessionStorage.setItem("auth-token", value.token)
      sessionStorage.setItem("username", value.name)
     }
    ))
  }

}
