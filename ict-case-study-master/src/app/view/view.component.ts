
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  ko=["hai","lo","lok"]
  utrue=true
  count=0
  arr_names: any;
  
  constructor(private api:ApiService) {
    
    this.arr.fill(0)
    
    api.gettodos().subscribe(
      (response)=>
    {
      this.data=response
    })
  }



  checkValue(value:any,l:any){
   
    
if(this.data[value-1].completed==false)
    {this.data[value-1].completed=true;
    
    this.count+=1
    this.total+=1
    }
    else if(this.data[value-1].completed==true)
    {this.data[value-1].completed=false;
    

    }
   
    if(this.count<0)
    {this.count=0}
  
    // var ckd=document.getElementById(value)
    
   
    
    var promise = new Promise((resolve,reject)=>{
      if(this.count==5 )
      {
        this.count=0;
        resolve("Congratulations! You've have finished 5 more tasks! \n total tasks completed :");
      }
     })
     promise.then((str)=>{
      var t=str
      alert(t+String(this.total))
     })
    }
    

    
 



 
    arr:any[200]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    arr2:any[200]=[]
    data:any=[];
  val=this.data.id;
  kilo=this.data.completed;
  total=0
  ngOnInit(): void {
  }
}
