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
 empdetails=[ {id:'1',name:'employee1',deptname:'iit'},
 {id:'2',name:'employee2',deptname:'mobile work'},
 {id:'3',name:'employee3',deptname:'angular'}
];
getdata()
  {
if(this.additem){
  this.item.push(this.additem);
  this.additem='';
}
  }

 
}
