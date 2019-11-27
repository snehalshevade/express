import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp={
    "No":"",
    "Name":"",
    "Age":""
  };
  
    

   constructor(private route:ActivatedRoute,//to take parameter from edit/:No
    private router:Router, //helps to navigate after edit or delete.
    private service:DataService
    ) { }

  ngOnInit(){//here we want to pull parameter.
    this.route.paramMap.subscribe((result)=>{
      let No=result.get("No");//in get name should be same as as you given in url edit:No
      console.log(No);//this no we want to send to data service.

      let observableresult=this.service.Selectbyno(No)
      observableresult.subscribe((records)=>{   //we will get array of result in records(array of emp object).
      console.log(records[0]);
      this.emp=records[0];
    });
  });
  }

  Update()
  {
   console.log( this.emp);
   let observableresult= this.service.Update(this.emp);
   observableresult.subscribe((result)=>{
     console.log(result);//if successful i.e. record is updated.now we can save it in 
     this.router.navigate(['home']);   
    });
  }

}
