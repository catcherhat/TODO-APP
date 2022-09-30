import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  button_valid=false
  rightcreds=false
  greet=""
  greetr=""
whichcolor="black"
public username=""
public password=""
   button=document.getElementById('button');

   t1=document.getElementById('username');
   t2=document.getElementById('password');

  constructor(private router :Router) { }

  ngOnInit(): void {
  
  }
 
  onclick()
  {  
    this.validate(this.gotohome)
    

}

gotohome=()=>{
  this.router.navigate(['/view']);  
}

validate=(f:Function)=>
{
  if(this.username=="admin" && this.password=="12345")
    {
      this.rightcreds=true;
      this.greet=""
     f()
    }
    if(this.rightcreds==false)
    {
      this.greet="not the right credentials"
      this.greetr=""
      this.whichcolor="red"
    }
    else{
      this.greetr="welcome"
      this.whichcolor="black"
    }
  }
}
