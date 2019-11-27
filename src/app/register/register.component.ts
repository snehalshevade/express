import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emp={
    "No":"",
    "Name":"",
    "Age":""
  };
  
    

   constructor(private route:ActivatedRoute,//to take parameter from edit/:No
    private router:Router, //helps to navigate after edit or delete.
    private service:DataService
    ) { }

    message="";

  

  ngOnInit() {
  }

  Insert(myform)
  {
    let empObj=myform.form.value;
    console.log(empObj);
   let observableresult= this.service.Insert(empObj);
   observableresult.subscribe((result:any)=>{
    console.log(result);//if successful i.e. record is updated.now we can save it in 
    if(result.name=="ValidationError")
    {
      this.message="Data is Invalid!!";
    }
    else{
      this.message="Record added!!";
     }
   });
  }

  Gobackhome()
  {
    this.router.navigate(['home']);
  }
}


