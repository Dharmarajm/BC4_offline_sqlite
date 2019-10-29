import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavGuard implements CanActivate  {
  
  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.role;
    
    if(localStorage.getItem('token')!=undefined){
        if(localStorage.getItem('role_id')=="1" && expectedRole=="1"){
          return true;
        }else if(localStorage.getItem('role_id')=="2" && expectedRole=="2"){
          return true;
        }else{
          if(localStorage.getItem('role_id')=="1"){
            this.router.navigate(['/self-care-tabs/tabs/tab1']);
          }else if(localStorage.getItem('role_id')=="2"){
            this.router.navigate(['/care-giver-tabs/tabsc/tab1c']);  
          }
          return false;
        }
      }else{
        this.router.navigate(['login']);
      }

    
    return true;
  }
}
