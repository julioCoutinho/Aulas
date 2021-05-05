import { observable, Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({providedIn: 'root'})
export class StudentsGuard implements CanActivateChild{
    
    
    constructor() { }  

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {        
        
        return true;
    }
    

}