import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

/*Molomjamts - 02/03/2018
  create to check the requested URL is allowed or not for the user.
  it is used for URL that requires authentication. 
*/
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth:LoginService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('id_token in guard::'+localStorage.getItem('id_token'));
      if(this.auth.loggedIn()){
        return true;
      }
      else{
        this.router.navigateByUrl('/unauthorized');
        return false;
      }
  }
}
