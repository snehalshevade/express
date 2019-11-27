import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  emps:any;

  constructor(private service:DataService,
              private router:Router,
              ) { }

  ngOnInit() {
    let observableresult=this.service.Select();
    
    
    observableresult.subscribe((result)=>{
      console.log(result);
      this.emps=result;
    });
  }

  GoToRegister()
  {
    this.router.navigate(["/register"]);
  }

  
}
