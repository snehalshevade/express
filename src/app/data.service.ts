import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper:HttpClient) { }
Select()
{
  return this.helper.get("15.206.165.166:9898/emps");
} 

Selectbyno(No)
{
  return this.helper.get("15.206.165.166:9898/emps/"+No);//****should give / when appending by+ */
}

Insert(empObj)
{
  return this.helper.post("15.206.165.166:9898/emps",empObj);
}

Update(empObj)
{
  return this.helper.put("15.206.165.166:9898/emps/"+empObj.No,empObj);//empObj.No will go in header and empobj will go in body
}

Delete(No)
{
  return this.helper.delete("15.206.165.166:9898/emps/"+No);
}
}
