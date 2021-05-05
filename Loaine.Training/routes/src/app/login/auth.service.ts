import { User } from './user';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticator = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private _router: Router
  ) { }

  login(user: User){
    if(user.name === 'Julio' &&  user.password === '123') {
      
      this.userAuthenticator = true;

      this.showMenuEmitter.emit(true);
      
      this._router.navigate(['/']);

    }else{
      this.userAuthenticator = false;
      this.showMenuEmitter.emit(false);
    }
  }

  isAuthUser(){
    return this.userAuthenticator;
  }
}
