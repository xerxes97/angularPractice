import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/*
Estos son los guardianes, un sistema de control para saber quienes pueden o no acceder a una determinada
ruta
*/

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true ;
    //Va a validar unos datos de sesion y segun si es true -> deja pasar y si es false No
  }
  
}
