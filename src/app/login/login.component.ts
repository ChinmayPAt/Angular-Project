import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private r:Router) { 
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')]),
     pass:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$')]) 
    })
  }

  ngOnInit() {
  }

  goMain(){
    this.r.navigate(['dashboard']);
  }

}
