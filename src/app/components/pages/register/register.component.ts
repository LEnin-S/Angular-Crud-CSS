import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform!:FormGroup;
  constructor(private fb:FormBuilder,private serv:ServiceService) { }

  ngOnInit(): void {
    this.registerform=this.fb.group({
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailid:['',Validators.required],
      password:['',Validators.required],
      cpassword:['',Validators.required]
    })
  }

  submit(){
    this.serv.addprofile(this.registerform.value).subscribe(data=>{
      data=this.registerform.value;
    })
    console.log(this.registerform.value);

  }

}
