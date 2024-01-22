import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  additem:any="";
  item:any="";
 empdetails=[ {id:'1',name:'employee1',deptname:'iit',phone:'678900000'},
 {id:'2',name:'employee2',deptname:'mobile work',age:'20',phone:'456778899'},
 {id:'3',name:'employee3',deptname:'angular',age:'21',phone:'457899877'}
];
getdata()
  {
if(this.additem){
  this.item.push(this.additem);
  this.additem='';
}
  }

 
}
