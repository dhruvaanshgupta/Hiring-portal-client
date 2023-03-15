import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService, private router: Router, private toastr:ToastrService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.IsloggedIn()){
        const role = route.data["roleId"] as string;

        if(role){
         const match = this.service.roleMatch(role);

            if(match){
              return true;
            }else{
              this.router.navigate(['forbidden'])
              return false;
            }
        }
      }
      else{
        this.router.navigate(['auth']);
        return false;
      }
   
  }
  
}
