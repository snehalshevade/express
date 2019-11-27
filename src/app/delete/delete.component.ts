import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  
  constructor(private route:ActivatedRoute,//to take parameter from edit/:No
    private router:Router, //helps to navigate after edit or delete.
    private service:DataService
    ) { }

  ngOnInit(){//here we want to pull parameter.
    this.route.paramMap.subscribe((result)=>{
      let No=result.get("No");//in get name should be same as as you given in url edit:No
      console.log(No);//this no we want to send to data service.

      let observableresult=this.service.Delete(No)
      observableresult.subscribe((records)=>{   //we will get array of result in records(array of emp object).
      console.log(records);
      this.router.navigate(['home']);
    });
  });
  }
}
