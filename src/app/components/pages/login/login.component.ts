import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Createemp?:FormGroup;

  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.Createemp=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailid:['',Validators.required]
    })
  }

}
