import { Component, OnInit } from '@angular/core';
import { profile } from 'src/app/data/profile';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profilelist?:profile[];


  constructor(private serv:ServiceService) { }

  ngOnInit(): void {
    this.retervicelist();

  }

  retervicelist(){
    this.serv.showprofile().subscribe({
      next:(data)=>{
        this.profilelist=data;
        console.log(data);
      },
      error:(e)=>
        console.error(e)

    })
  }


}
