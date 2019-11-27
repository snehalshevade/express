import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

 constructor(private router:Router) { }
 
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
 {   
 if(this.Isloggedin())
    {
      console.log("user has logged in");
      return true;
    }
    else
    {
      console.log("user has not logged in");
      this.router.navigate(['/login']);
      return false;
    }
}

Isloggedin()
{
   
  if(window.sessionStorage.getItem("isActive")!=null 
  && 
 window.sessionStorage.getItem("isActive")=="1")
{
// some logic to check if person has logged in
return true;
}
else{
return false;
}

}

LogIn(logincredentials) {
   if(logincredentials.Name=="abc" &&
        logincredentials.Password=="abc@123")
   {
     window.sessionStorage.setItem("isActive","1");
     return true;
    }
   
    else{
     return false;
    }
}

Logout()
{
  window.sessionStorage.setItem("isActive","0");
}

}
