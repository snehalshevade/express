import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;
  constructor(private router:Router,
    private service:AuthService) { }

  ngOnInit() {
  }

  SignIn(loginform)
  {
    let logincredentials=loginform.form.value;
    console.log(logincredentials);

    let isuservalid=this.service.LogIn(logincredentials);
    if(isuservalid)
    {
      console.log("user is valid");
      this.router.navigate(['home']);

    }
    else{
      this.message="username/password is invalid";

    }
  }

}
